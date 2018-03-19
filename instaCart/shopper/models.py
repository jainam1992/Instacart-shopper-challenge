from __future__ import unicode_literals

from django.db import models


class Applicant(models.Model):

    id = models.AutoField(serialize=False, primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    region = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=50, null=True)
    phone_type = models.CharField(max_length=100, null=True)
    source = models.CharField(max_length=100, null=True)
    over_21 = models.NullBooleanField(null=True)
    reason = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100, unique=True)
    workflow_state = models.CharField(max_length=100, default='applied')
    created_at = models.DateTimeField(db_index=True, auto_now_add=True, null=False)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'id: %s, first_name: %s, last_name: %s, email : %s, workflow_state : %s, created_at : %s' % (self.id, self.first_name, self.last_name, self.email, self.workflow_state, self.created_at)

