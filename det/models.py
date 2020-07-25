from django.db import models


class DetUsers(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    useremail = models.EmailField(max_length=100)
    userpass = models.CharField(max_length=100)

    class Meta:
        db_table = "det_users_details"

