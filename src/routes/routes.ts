// Send Email
import { Router } from 'express';
import { sendEmail } from '../controllers/send-email.controllers';

const router = Router();

router.post('/send-email', sendEmail);

export default router;