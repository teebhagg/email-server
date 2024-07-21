import { Request, Response } from "express";
import * as SibApiV3Sdk from "@sendinblue/client";
import * as brevo from "@getbrevo/brevo";
import * as dotenv from "dotenv";

dotenv.config()

const apiInstance = new brevo.TransactionalEmailsApi();
const apiKey = process.env.BREVO_API_KEY;

if (!apiKey) {
    console.error("BREVO_API_KEY is not defined in environment variables");
    process.exit(1);
  }

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY!
);

export const sendEmail = async (req: Request, res: Response) => {
    console.log(process.env.BREVO_API_KEY);
    const body: any = await req.body;
    
    let sendSmtpEmail = new brevo.SendSmtpEmail();
    
    sendSmtpEmail.subject = body.subject ?? "Contact from Portfolio";
    sendSmtpEmail.htmlContent = `<html><body><p>${body.message}</p></body></html>`;
    sendSmtpEmail.sender = { name: body.fullName, email: body.email };
    sendSmtpEmail.to = [{ email: "khalijonez777@gmail.com", name: "Joshua Ansah" }]; 

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
    res.status(data.response.statusCode ?? 200).json(data);

  } catch (error: any) {
    console.error("API call failed. Error: " + JSON.stringify(error));
    res.status(error.response.statusCode).json(error);
  }
};
