# Generated by Django 4.0.1 on 2022-02-02 07:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_lesson_description_alter_lesson_is_publish'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lesson',
            name='hsklevel',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.hsklevel', verbose_name='HSK Level'),
        ),
    ]
