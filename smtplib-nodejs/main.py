import smtplib

smtp_object = smtplib.SMTP('smtp.gmail.com', 587)
smtp_object.ehlo()
smtp_object.starttls()
email = "marvelousprince012233@gmail.com"
app_password = "<YOUR-APP-PASSWORD-HERE>"
smtp_object.login(email, app_password)

from_address = email
to_address = 'lit2021024@iiitl.ac.in'
subject = "Hello prince, py-bot here"
body = "chal nikal\n\nRegards,\nPy-bot :)"
msg = "Subject: " + subject + '\n' + body

smtp_object.sendmail(from_address, to_address, msg)