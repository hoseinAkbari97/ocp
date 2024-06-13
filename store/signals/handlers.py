from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from store.models import Customer
from store.models import Order, OrderItem, Customer, Product
from django.core.exceptions import ObjectDoesNotExist

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_customer_for_new_user(sender, **kwargs):
  if kwargs['created']:
    Customer.objects.create(user=kwargs['instance'])
    
@receiver(post_save, sender=Order)
def on_order_status_change(sender, instance, **kwargs):
    if instance.payment_status == Order.PAYMENT_STATUS_COMPLETE:
        order_items = OrderItem.objects.filter(order=instance)
        for item in order_items:
            try:
                customer = instance.customer
                product = item.product
                customer.courses.add(product)
            except ObjectDoesNotExist:
                continue