    <!--LAPTURE SYSTEMS WEBSITE TO MC CORE SCRIPT-->
    <script type="text/javascript" src="https://lapture.com/scripts/website-prompt.latest.min.js"></script>
    <!--LAPTURE SYSTEMS SETTINGS SCRIPT-->
    var settings = {
        alertMessage: "You've landed on our website...  Click 'OK' to continue on our Mobile App.", // Your Message
        username: "fashionuk", // Your Lapture Username
        defaultMarketingChainLink: "welcome", // Default Marketing Chain Link
        availableWebsitePages: ["location/", "docs/"], // Add Absolute Path
        includeWebsitePath: true, // Include Every Path after /
        campaigns: [
          {
            websitePage: ["contact"], // Add Absolute Path
            marketingChainLink: "bio", // Default Marketing Chain Link
            includeWebsitePath: false // Include Every Path after /
          },
          // Add More Campaign Objects...
        ],
      };
