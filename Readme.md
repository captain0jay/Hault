
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/captain0jay/Hault">
    <img src="https://raw.githubusercontent.com/captain0jay/Hault/main/project/logo/animated/breathe/Hault_logo.gif" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Hault</h3>

  <p align="center">
    AI Customer support and buisness launch software
    <br />
    <a href="https://github.com/captain0jay/Hault"><strong>Host it online</strong></a>
    <br />
    <br />
    <a href="https://github.com/captain0jay/Hault/Tutorials/Installation.md">Install locally</a>
    ·
    <a href="https://github.com/captain0jay/Hault/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>

  <div align="center">
  <a href="https://github.com/captain0jay/Hault/stargazers"><img src="https://img.shields.io/github/stars/captain0jay/Hault" alt="Stars Badge"/></a>
<a href="https://github.com/captain0jay/Hault/network/members"><img src="https://img.shields.io/github/forks/captain0jay/Hault" alt="Forks Badge"/></a>
<a href="https://github.com/captain0jay/Hault/pulls"><img src="https://img.shields.io/github/issues-pr/captain0jay/Hault" alt="Pull Requests Badge"/></a>
<a href="https://github.com/captain0jay/Hault/issues"><img src="https://img.shields.io/github/issues/captain0jay/Hault" alt="Issues Badge"/></a>
<a href="https://github.com/captain0jay/Hault/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/captain0jay/Hault?color=2b9348"></a>
<a href="https://github.com/captain0jay/Hault/blob/master/LICENSE"><img src="https://img.shields.io/github/license/captain0jay/Hault?color=2b9348" alt="License Badge"/></a>
</div>
<div>

  
</div>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#introduction">Introduction</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
<!--       <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul> -->
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#what-are-the-env-variables-we-need
">What are the env variables we need</a></li>
        <li><a href="#options">Options</a></li>
      </ul>
    </li>
     <li><a href="#demo">Demo</a></li>
    <li><a href="#installation">Installation</a>
    <ul>
        <li><a href="#guide-to-direct-hosting-on-the-internet">Guide to Direct hosting on the internet</a></li>
        <li><a href="#local-installation">Local Installation</a></li>
      </ul></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- INTRODUCTION -->
## Introduction

- The project is mainly a WhatsApp bot which you can scroll down and host via one click deploy on render by pressing `Deploy on render` and the user can talk to the application via WhatsApp to whatever number you have configured on twilio.

- In my case,  you can check the bot out right now by messaging me at (+13476958493)
Since the number is blocked because of WhatsApp verification problem you can check the website out and try the project to do so you will need to log in via Google and you will need to ask the admin permission via email at `capja778@gmail.com`
then head over to [https://hault.vercel.app/login](https://hault.vercel.app/login)

- I keep it as raw as possible so that the people using this project find it easy to host and edit the website too.
Here are some of the screenshots of the application

![Screenshot 1](https://raw.githubusercontent.com/captain0jay/Hault/main/project/Screenshot%20from%202024-06-24%2011-28-06.png)

![Screenshot 2](https://raw.githubusercontent.com/captain0jay/Hault/main/project/Screenshot%20from%202024-06-24%2011-28-27.png)

![Screenshot 3](https://raw.githubusercontent.com/captain0jay/Hault/main/project/Screenshot%20from%202024-06-24%2011-09-11.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ABOUT THE PROJECT -->
## About The Project

Hault is a cutting-edge software designed to empower businesses and professionals by simplifying the process of showcasing products and services. Our platform offers a comprehensive solution for adding detailed information about products or services into a user-friendly database. Leveraging advanced AI technologies like Gemini and Workers AI, Hault enables seamless customer interaction and engagement via WhatsApp.

**Key Features:**

- **Intuitive Database Management:** Easily add and manage detailed information about your products or services.
- **AI-Powered Customer Interaction:** Utilize Gemini and Workers AI to facilitate customer inquiries, provide detailed information, and enhance engagement.
- **WhatsApp Integration:** Allow customers to reach out directly via WhatsApp to ask questions, explore FAQs, and receive instant responses.
- **Automated Customer Support:** Ensure continuous customer support with AI-driven responses, even when you are not available.

**Benefits:**

- **Increase Customer Engagement:** Engage with your customers directly on WhatsApp, providing a convenient and familiar communication channel.
- **Enhance Customer Support:** Offer immediate, accurate responses to customer inquiries, improving their overall experience.
- **Streamline Product/Service Presentation:** Simplify the process of showcasing new products or services with professional, ready-to-use templates.
- **Save Time and Resources:** Automate customer interactions and support, allowing you to focus on other essential business activities.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!--### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- GETTING STARTED -->
## Getting Started

Installation is divided into 2 parts that is one for non-developers who wanto quickly host and dont want to compicate things and other for the developers that knows programming and want to edit things in the project so lets begin.

But first for both developers and non-developers we need credentials of websites that is required to run this project
- Twilio (which handles whatsapp, phone number verification,sms )
- Airtable (Which is our primary database or you can use mongodb)
- Mongodb (Which can be used instead of airtable )
- AI service (either GOOGLE Gemini or Cloudflare Workers AI )
- Jwt secret key

### What are the env variables we need
- dont worry non-developers you dont have to add the credentials that we will discuss later you have to add it in the render website itself after clicking `deploy on render`
- for developers add a .env file in root directory thats it

`non developers can head down to`<a href="#installation">Installation</a>`section and skip this part you will be instructed what to do there`

so what are the credentials we need that will be in .env file?
the credentials yu got fom websites will go here
```
PORT=3000
LLM=GEMINIAI
UI=AIRTABLE
OWNER_EMAIL=
OWNER_PHONE_NUMBER=
DATABASE_URL=
REDIS_DATABASE_URL=
TWILIO_PHONE_NUMBER=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
GOOGLE_API_KEY=
CLOUDFLARE_APP_ID=
CLOUDFLARE_API_TOKEN=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=
JWT_SECRET_KEY=123
AIRTABLE_TABLE_ID=
AIRTABLE_BASE_ID=
AIRTABLE_API_KEY=
RULES='You are an AI support assistant for my company and are only allowed to answer questions related to context i have given you, normal grettings is fine speak like a support assistant on behalf of my company, your responses go directly to my customers so in no response should you be addressing me you are to talk with the users o my application only, ignore lowercase and uppercase ake all lowercase and when you dont have any answer say that we dont have the answer to that right now we will get back to you later' 
```

### Options
First get the following authentication token and api keys from the following services

 - Google Gemini API key
 - Airtable account Table id, base id, api key
 - Twilio account sid , phone number and auth token
   
well actually i added 2 AI servuce that is gemini and workers ai which can be switched using LLM variable set to either GEMINIAI or WORKERAI.But for ease we will use gemini ai for now.

Same for database plan was to in corporate Mongodb too but we are only gonna use Airtable for now so set UI as AIRTABLE

For twilio you will need to create a whatsapp sender by purchasing a number, then create a service there you will choose the number, then in integration section choose webhook and add the call back url as 

`your_url+/api/v1/twilio/message`

in status add 

`your_url+/api/v1/twilio/status`

we will get the url after deployment

 
So overall you will need these values 
```
LLM=GEMINIAI
UI=AIRTABLE
OWNER_EMAIL
OWNER_PHONE_NUMBER
TWILIO_PHONE_NUMBER
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
AIRTABLE_TABLE_ID
AIRTABLE_BASE_ID
AIRTABLE_API_KEY
```  
Let everything else stay empty or add "123" as a dummy value when inputting in the deployment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEMO -->
## Demo

So you can check the bot out right now by messaging at (+13476958493)
Since the number is blocked because of whatsapp verification problem you can check the website out and try the project to do so you will need to login via Google and you will need to ask the admin permission via email at `capja778@gmail.com`
then head over to [https://hault.vercel.app/login](https://hault.vercel.app/login)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INSTALLATION -->
## Installation
Installation is divided into 2 parts that is one for non-developers who wanto quickly host and dont want to compicate things and other for the developers that knows programming and want to edit things in the project so lets begin.

### Guide to Direct hosting on the internet
for `(non-developers)`

 1. First get below written credentials


    * credentials to fetch
    ```
    LLM=GEMINIAI
    UI=AIRTABLE
    OWNER_EMAIL
    OWNER_PHONE_NUMBER
    TWILIO_PHONE_NUMBER
    TWILIO_ACCOUNT_SID
    TWILIO_AUTH_TOKEN
    AIRTABLE_TABLE_ID
    AIRTABLE_BASE_ID
    AIRTABLE_API_KEY 
    ```

 2. Click the below button 
    
   [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/captain0jay/Hault)

 3. Then you will be redirected to render website where the values we got will be inputted 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j6d4n937rxgkv7zophq0.png)

 4. Then just press launch button and your application will be live and your customers can start messaging and take the benefit of AI customer support
 
 5. One last step as we discussed earlier that in console.twilio.com -> messaging -> service -> your_created_service -> integration 

the call back url as 

`your_url+/api/v1/twilio/message`

in status add 

`your_url+/api/v1/twilio/status`

- here add your_url as the one that you got in hosted application see below image as reference

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w5x7qfgktyex2j620kln.png)


### Local Installation
for `(developers)`
`make sure you have docker installed`

to run this repo locally follow these steps

1. Get all the credentials, see this tutorial on how to get these credentials [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/captain0jay/Hault.git
   ```
3. Install everything
   ```sh
   make install
   ```
4. Enter your credentials in `.env` file
5. Run the project
   ```sh
   make start
   ```
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Who is my project usefull to?
- startups that need to validate their idea
- professionals selling their service or showcasing their products
- Hr for recruitments
- Freelancers to showcase their projects
- Basically anyone that need to setup buisness online with automated customer support
_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Make backend
- [x] Make routes
- [x] Make frontend and auth route

See the [open issues](https://github.com/captain0jay/Hault/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Connect with me on linkedin - [@my_linkedin](https://linkedin.com/in/captain0jay)

Captain Jay - [@my_twitter](https://twitter.com/captain0jay) 

Email - capja778@gmail.com

Portfolio website - [@my_website](https://captainjay.xyz/)

Project Link: [https://github.com/your_username/repo_name](https://github.com/captain0jay/Hault)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/captain0jay/Hault.svg?style=for-the-badge
[contributors-url]: https://github.com/captain0jay/Hault/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/captain0jay/Hault.svg?style=for-the-badge
[forks-url]: https://github.com/captain0jay/Hault/network/members
[stars-shield]: https://img.shields.io/github/stars/captain0jay/Hault.svg?style=for-the-badge
[stars-url]: https://github.com/captain0jay/Hault/stargazers
[issues-shield]: https://img.shields.io/github/issues/captain0jay/Hault.svg?style=for-the-badge
[issues-url]: https://github.com/captain0jay/Hault/issues
[license-shield]: https://img.shields.io/github/license/captain0jay/Hault.svg?style=for-the-badge
[license-url]: https://github.com/captain0jay/Hault/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/captain0jay
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
