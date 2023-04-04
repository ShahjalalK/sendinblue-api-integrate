const SibApiV3Sdk = require('sib-api-v3-sdk');
export default function handler(req, res) {
    const {email, firstName, lastName} = req.body

    let apikey = process.env.SIB_API_KEY
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = apikey

    let apiInstance = new SibApiV3Sdk.ContactsApi()
    let createContact = new SibApiV3Sdk.CreateContact()
    // var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

    createContact.email = email
    createContact.firstName = firstName
    createContact.lastName = lastName
    createContact.listIds = [6]

    // emailCampaigns.name = "Campaign sent via the API";

    apiInstance.createContact(createContact).then((data) => {
        res.status(200)
        res.status(200).json({message : "sucess"})
    }, function(error){
        res.status(500).json({error})
        
    })
  }