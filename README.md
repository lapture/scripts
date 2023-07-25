<h1>Using Lapture Systems Settings Script for Website Customisation</h1>

**Introduction**

The script is a powerful tool that allows website owners to begin their mobile marketing journey by customising various aspects of their website's behaviour with a dedicated Mobile First approach without the need for technical knowledge or coding skills. This guide will walk you through each setting and provide practical examples to help you understand how to implement it into your website.

**Getting Started**

> #### Before you begin you'll need...
>
> - A Lapture Systems Business Account (https://lapture.com).
> - A created Marketing Chain for the mobile flow (English Document: https://en-gb.lapture.com/docs/marketing-chain/building/building-marketing-chains).
> - Access to your website's admin panel.
>

Before we dive into the details, let's understand what the script is and how it works. The settings script contains a set of variables that define specific configurations and options for your website. These variables can be easily customised to guide your customers to continue browsing on your Mobile App.

As you create different campaigns for your Mobile customers using a Marketing Chain, you can use this script to tailor your website's behaviour and appearance to meet your specific needs.

**Notify Message:**

The ```notifyMessage``` controls the message displayed in the prompt box when a user views your website on a mobile device. You can set this message to inform users about the page(s) having a Marketing Chain Campaign.
```

    var settings = {             
        alertMessage: "You are viewing this website on a mobile device. Click 'OK' to continue.",            
        // ... other settings ...         
    };
    
```
**Username:**

The ```username``` setting defines the username associated with your Lapture Systems Business Account.


```

    var settings = {             
        username: "fashionuk",           
        // ... other settings ...         
    };
    
```

**Default Marketing Chain Link:**

The ```defaultMarketingChainLink``` setting sets the default Marketing Chain link for the website. This link will be used as the destination URL if no specific Marketing Chain campaigns are defined.

```

    var settings = {             
        defaultMarketingChainLink: "bio",           
        // ... other settings ...         
    };
    
```


**Available Website Pages:**

The ```availableWebsitePages``` is an array that contains the pages or paths on which the prompt box should not be displayed. This allows you to exempt specific pages from showing the mobile prompt that don't have a dedicated mobile Marketing Chain of events.

```

    var settings = {             
        availableWebsitePages: ["test", "example"],           
        // ... other settings ...         
    };
```

**Campaigns:**

The campaigns is an array that allows you to define specific campaigns with their associated website pages and Marketing Chain links. These campaigns can have their own rules for showing or hiding the prompt box.

>EG: If a user visits www.example.com/contact -or- www.example.com/contact-us/john then 
your users will be prompted to continue using your Dedicated Mobile App via
your Marketing Chain with the campaign link bio.
```
  var settings = { 
    campaigns: [ 
            { 
                websitePage: ["contact", "contact-us/"], 
                MarketingChainLink: "bio", 
                includeWebsitePath: true 
            }, 
            // Add more campaign objects as needed 
        ], 
        // ... other settings ... 
  };
    
```
**Include Website Path:**

The ```includeWebsitePath``` setting, when set to true, includes everything after the matched path in the availableWebsitePages or websitePage arrays when checking for exemptions.

```

    var settings = {             
        includeWebsitePath: true,           
        // ... other settings ...         
    };
```

**Final Configuration:**

Your final code on your website should look something like this:
```
    <!--LAPTURE SYSTEMS WEBSITE TO MC CORE SCRIPT-->
    <script type="text/javascript" src="scripts.lapture.com/website-to-mc.latest.js"></script>
    
    <!--LAPTURE SYSTEMS SETTINGS SCRIPT-->
    var settings = {
        alertMessage: "You've landed on our website...  Click 'OK' to continue on our Mobile App.", // Your Message
        username: "fashionuk", // Your Lapture Username
        defaultMarketingChainLink: "welcome", // Default Marketing Chain Link
        availableWebsitePages: ["location/", "docs/"], // Add Absolute Path
        includeWebsitePath: true, // Include Every Path after /
        campaigns: [
          {
            websitePage: ["bio"], // Add Absolute Path
            marketingChainLink: "bio", // Default Marketing Chain Link
            includeWebsitePath: false // Include Every Path after /
          },
          // Add More Campaign Objects...
        ],
    };
```
