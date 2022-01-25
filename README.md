This project is a demo on how to incorporate In app purchases to your expo application by using Stripe. The following video shows how to final application will look 
along with the results on the Stripe portal.

Click the image below to see the demo:

[![image](https://user-images.githubusercontent.com/47510287/150881744-d014bb3c-9cf5-42ca-a5dc-0ea8b6e2a63c.png)](https://youtu.be/-2pQ5GCVg9gf)

To get the project running, first you must compile with eas build command.
After installing the application, you can run with expo start --dev-client

To change which stripe account the payments are attached to, you must change your publishable key in app.ts and change the server you are sending a post request to. This can be done by changing the link in StripeApp.js. The location of where this code is in the video. 

__Difficulties

My main difficulty originally was caused by the fact that I tried to implement in app purchases through the native libraries. This required the bare workflow which was much more difficult to work with. Updating the Expo documentation so that the in app purchases page contains an alternative on how to implement in app purchases with Stripe. Since this can be done with the managed workflow which is much more simple to manage and can be done with eas build. 

Another difficulty I faced is that I would encounter weird errors with EAS after taking a break from the project. I finished most of the code during the end of December, but didn't get a chance to make the video till late January. I tried to build and run the project again so I can make my video demonstration, but ran into a problem where scanning the QR code that connects my client app to the metro bundler wouldn't create a response in the client app. This meant that I couldn't run the app on my physical device. I tried to find the solution to my problem on stackoverflow but couldn't find anything related to my problem. I then moved my code into a new project and everything seemed to work again. I figured that something must have been wrong with my project configuration settings that caused for the bundler to not connect to my iphone. Another troubleshoot guide for problems like these might also help those who are new to the expo clint and to EAS builds.
