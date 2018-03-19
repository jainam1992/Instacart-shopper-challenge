# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Applicant',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('region', models.CharField(max_length=100, null=True)),
                ('phone', models.CharField(max_length=50, null=True)),
                ('phone_type', models.CharField(max_length=100, null=True)),
                ('source', models.CharField(max_length=100, null=True)),
                ('over_21', models.NullBooleanField()),
                ('reason', models.CharField(max_length=100, null=True)),
                ('email', models.CharField(unique=True, max_length=100)),
                ('workflow_state', models.CharField(default='applied', max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
