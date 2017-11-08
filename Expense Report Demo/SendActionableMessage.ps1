$from = "<SENDER'S EMAIL ADDRESS>"
$to = "<RECIPIENT'S EMAIL ADDRESS>"
$subject = "Expense Report (ER-321377) for 249.25 USD is available"
$emailHeader = "<html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'><script type='application/ld+json'>"
$jsonBody = Get-Content .\CardSample.json
$emailFooter = "</script><body>Your HTML email body goes here</body></html>"
$emailBody = $emailHeader + $jsonBody + $emailFooter
$msolcred = Get-Credential -credential $from
Send-MailMessage -From $from -To $to -Subject $subject -Body $emailBody -BodyAsHtml -SmtpServer smtp.office365.com -Credential $msolcred -UseSsl -Port 587
