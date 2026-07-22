Hostinger PHP contact endpoint

Files:
- contact.php

Expected production URL:
- /api/contact.php

Optional environment variables or hosting config values:
- CONTACT_TO_EMAIL=form@apexprecisionbilling.com
- CONTACT_FROM_EMAIL=form@apexprecisionbilling.com
- CONTACT_SITE_URL=https://apexprecisionbilling.com

If Hostinger does not expose environment variables for PHP mail in your plan,
update the defaults inside contact.php directly before deploy.

This endpoint accepts JSON POST with:
- name
- email
- phone
- company
- service
- message
- website

The `website` field is a honeypot and should stay empty.
