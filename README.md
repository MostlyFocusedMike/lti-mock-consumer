# lti-demo with Node

It uses Hapi for routing and Handlebars for passing context to a template

## useful links
- [main ims implementation guide, super dry but has the most stuff](https://www.imsglobal.org/specs/ltiv1p1/implementation-guide#toc-6)

- [explanation of what LIS (earning information Services) means](https://www.imsglobal.org/ims-learning-information-services-overview)

- [medium article: Simple LTI Tool Consumer in HTML and JavaScript](https://medium.com/lcom-techblog/simple-lti-tool-consumer-in-html-and-javascript-72ca153d7a83) and its [github](https://github.com/learningcom/learningcom.github.io/blob/master/ltitest/index.html)

- [repo for a node tool provider](https://github.com/omsmith/ims-lti)

- [Powepoint on basics of LTI from Harvard ATG github](https://github.com/Harvard-ATG/workshop-lti-basic/blob/master/presentation/tlt_lti_workshop_2014.pdf)

- [edu-apps quick LTI primier with some diagrams and params](https://www.edu-apps.org/code.html)

- [The definition of an URN](https://prateekvjoshi.com/2014/02/22/url-vs-uri-vs-urn/)

## What is an LIS?
From the link above, it looks like the system used to manage the names for people, groups, courses and "Outcome Management Systems", which I believe means grading. Here is a handy image from that link that spells out the main six:

![LIS document tree showing the six main services and how they interact with the TP and TC](https://www.imsglobal.org/sites/default/files/LISv2p0SpecPrimerv1p0-image002.jpg)

The six services are:
- Bulk Data Exchance Management Service
    - seems to be an umbrella service managing the other five
- Person Management Service
- Group Management Service
- Membership Management Service
- Course Management Service
- Outcomes Management Service
