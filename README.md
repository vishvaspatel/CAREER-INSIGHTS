# GrowFarm
<img src="https://github.com/user-attachments/assets/68244cdd-d6f8-4625-b720-71bc1e4a886a" alt="Logo" width="2000"> 

## 💥 Introduction

The proposed portal aims to provide a comprehensive and integrated platform for farmers, offering a range of features and services to enhance their agricultural practices. It addresses the challenges faced by farmers who need to navigate multiple platforms for information and services related to schemes, land details, APMC markets, and smart farming techniques. By providing a unique farmer ID and centralizing information, the portal streamlines access to crucial data such as scheme notifications, land details, APMC history, and facilitates processes like applying for loans and insurance.

Moreover, the portal incorporates smart farming capabilities, utilizing machine learning, artificial intelligence, and the internet of things to assist farmers with crop recommendations, disease detection, yield prediction, and weather forecasting. With the potential to make accurate future predictions based on collected farmer data, the portal holds promise in empowering farmers with valuable insights and resources for improved decision-making and agricultural outcomes.

It is built using React for the frontend, Express, Sockets Server, and Twilio for SMS service and communication, and MongoDB for the database and machine learning algorithms for disease detection, crop prediction, and crop recommendation.

## 💡 Why did we build this?

The portal was built to address the challenges faced by farmers in accessing crucial agricultural information and services. It aims to streamline decision-making by providing a centralized platform with a unique farmer ID for accessing schemes, land details, APMC history, and smart farming capabilities. The goal is to empower farmers with valuable insights, improve their decision-making, and enhance overall agricultural outcomes.

## 🛠️ Local development

That's pretty easy. To ensure that you are able to install everything properly, we would recommend you to have <b>Git</b>, <b>NPM</b> and <b>Node.js</b> installed.

We will first start with setting up the Local Project Environment:

```sh
git clone https://github.com/Neelpatel11/Growfarm-Digital-farmer-portal.git
cd Growfarm-Digital-farmer-portal
npm run install
```
Now we will add the environment variables in the client/ and server/

**Client**
```sh
cd client
npm install
npm start
```
For server setup, you need to add your MongoDB database URL to /config/mongoose.js.

**Server**
```sh
cd server
npm install
npm start
```

## 🛠️ Features of growfarm

Digital profile of farmers: Every farmer can register their self on growfarm after that they get a unique farmer id. Farmer id help farmers to get all information of them like farm information, eligible schemes, scheme application history, billing history, loan history, insurance history.

• **Smart farming (Crop recommendation system):** Farm can get suggestion for sowing the crop using parameters of soil like nitrogen, phosphers, potassium and whether details.

• **Whether broadcast and alert:** broadcasting and alerting bad weather can provide farmers with important information to help them make informed decisions about their agricultural practices and protect their livelihoods.

• **Alert and update of new schemes and subsidies:** providing alerts and updates on new schemes and subsidies for farmers can help them stay informed and take advantage of the opportunities available to them, leading to improved agricultural productivity, better financial outcomes, and greater economic stability for farmers and their communities.

• **Schemes:** The system will provide a user-friendly interface where farmers can select the scheme they wish to apply for and fill out the necessary information. The platform will also provide real-time updates on the status of their application and any other relevant information.

• **APMC billing history:** The digital billing history will allow farmers to easily track their sales and payment history, eliminating the need for manual record-keeping. This feature will also provide greater transparency and accountability in the agricultural supply chain, making it easier to identify any discrepancies or issues that may arise.

• **Farm information:** After verifying famer’s adhar details, they can get their farms information from ANY ROR in their profile page. From that farmer need not to visit any other portal. They get all information at one portal.

## 🧾 Class Diagram

![Class diagram](https://user-images.githubusercontent.com/83646676/227933827-aa99f4fa-dd6e-4195-9757-63b6fdb0257c.png)

## 🧾 ER diagram of farmer portal:

![Farmer portal ER Diagram](https://user-images.githubusercontent.com/83646676/227935603-30440d00-b4b6-417d-8726-2195d0c5ea90.png)

## 🧾 ER diagram of government portal:

![Government portal Er Diagram](https://user-images.githubusercontent.com/83646676/227935683-71373929-2e04-4ba3-b89a-002742eff438.png)

## 💻 Interface design of farmer portal:

### Farmer’s registration form

![Registration](https://user-images.githubusercontent.com/83646676/227987002-147bcf12-5d1a-431a-bad8-9f1df7049864.png)

###  Farmer’s profile page

![FPP](https://user-images.githubusercontent.com/83646676/227987187-29cc2ca0-8526-45dd-bb5e-085bd5932287.png)

### Hourly Weather forecast

![HWF](https://user-images.githubusercontent.com/83646676/227987425-616763f5-ade8-47fe-8a37-9eea8f0ea92d.png)

### APMC billing history at farmer side

![APMC](https://user-images.githubusercontent.com/83646676/227987902-e30ed926-316c-4a10-90c5-65f7f5bbd97c.png)

### Dashboard to analysis category wise registered farmers 

![dacwrf](https://user-images.githubusercontent.com/83646676/227988066-48f01abe-9ddc-4ad9-8c24-87fbfd22fc5d.png)

### Find farmer functionality 

![FFf](https://user-images.githubusercontent.com/83646676/227988262-3f58415e-3628-4559-8146-cea0f4eeee58.png)

### Admin side scheme dashboard

![Assd](https://user-images.githubusercontent.com/83646676/227988511-97d3a365-4898-4f94-8bba-555c247a8a40.png)

### Analysis dashboard for particular scheme 

![adfps](https://user-images.githubusercontent.com/83646676/227989156-eaf1e61a-bb40-4dbf-9590-ac39c10ce2b7.png)

### District wise soil analysis 

![DWSA](https://user-images.githubusercontent.com/83646676/227989307-62233f61-dea6-4766-baa7-902c2d74a4c2.png)

### Crop wise area, production and yield analysis 

![CWAPAYA](https://user-images.githubusercontent.com/83646676/227989974-7d4abb1a-8cb1-4c44-afdf-573b84691caa.png)

### Trader side digital bill generator 

![TSDBG](https://user-images.githubusercontent.com/83646676/227990534-78b3f3ce-5795-4f1b-a3c9-02c9de0826b7.png)


### Digital billing history

![Dhh](https://user-images.githubusercontent.com/83646676/227990730-0ec07b40-c74e-455f-9637-d7ac4406fbf8.png)


## 🎬Video demo of Growfarm Ui


https://user-images.githubusercontent.com/83646676/227994431-19456186-d09d-4b97-bc8a-d9c06d3121a7.mp4



https://user-images.githubusercontent.com/83646676/227994504-b990925b-2561-4db5-8b1b-ee7792cedc0f.mp4



https://user-images.githubusercontent.com/83646676/227994510-20b4a2d4-59c5-435a-a285-571e75fbd67f.mp4



https://user-images.githubusercontent.com/83646676/227994525-c63d7e5e-6aa3-41aa-855b-f0cfb350f7ea.mp4



https://user-images.githubusercontent.com/83646676/227994536-026f6a4b-ffc6-406e-94b7-ab215755f04f.mp4



https://user-images.githubusercontent.com/83646676/227994553-cc59698a-cd75-4ec5-bd1f-5e0456d3a210.mp4



