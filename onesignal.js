;(function (d, s) {
  script = d.createElement("script")
  script.type = "application/javascript"
  script.async = true
  script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"

  script.onload = () => {
    window.OneSignalDeferred = window.OneSignalDeferred || []

    OneSignalDeferred.push(function (OneSignal) {
      OneSignal.init({
        appId: "af1595b4-f433-46b6-a6be-536cfbe0bb75",
        serviceWorkerParam: {
          scope: "/scripts",
        },
        serviceWorkerPath: "/scripts/OneSignalSDKWorker.js",
      })
    })
  }

  d.getElementsByTagName("head")[0].appendChild(script)
})(document)
