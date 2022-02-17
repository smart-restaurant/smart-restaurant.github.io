function detect() {
  let BrowserDetect = {
    init() {
      this.browser = this.searchString(this.dataBrowser) || 'An unknown browser';
      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'an unknown version';
      this.OS = this.searchString(this.dataOS) || 'an unknown OS';
    },
    searchString(data) {
      for (let i = 0; i < data.length; i += 1) {
        let dataString = data[i].string;
        let dataProp = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;
        if (dataString) {
          if (dataString.indexOf(data[i].subString) !== -1) {
            const result = data[i].identity;
            if (result === 'Windows') {
              const userAgentInfor = navigator.userAgent.toLowerCase();
              const windowsVersion = userAgentInfor.substr(userAgentInfor.indexOf('windows nt ') + 11, 4);
              return this.searchOSversion(windowsVersion);
            }
            return result;
          }
        } else if (dataProp) {
          return data[i].identity;
        }
      }
    },
    searchVersion(dataString) {
      let index = dataString.indexOf(
        this.versionSearchString,
      );
      if (index === -1) {
        return;
      }
      // eslint-disable-next-line consistent-return
      return parseFloat(
        dataString.substring(index + this.versionSearchString.length + 1),
      );
    },
    searchOSversion(version) {
      let resultVersion = '';
      switch (version) {
        case '5.1':
          resultVersion = 'Windows XP';
          break;
        case '6.1':
          resultVersion = 'Windows 7';
          break;
        case '6.3':
          resultVersion = 'Windows 8';
          break;
        case '10.0':
          resultVersion = 'Windows 10';
          break;
        default:
          resultVersion = 'Windows 其他';
          break;
      }
      return resultVersion;
    },
    dataBrowser: [
      {
        string: navigator.userAgent,
        subString: 'Chrome',
        identity: 'Chrome',
      },
      {
        string: navigator.userAgent,
        subString: 'OmniWeb',
        versionSearch: 'OmniWeb/',
        identity: 'OmniWeb',
      },
      {
        string: navigator.vendor,
        subString: 'Apple',
        identity: 'Safari',
        versionSearch: 'Version',
      },
      {
        prop: window.opera,
        identity: 'Opera',
        versionSearch: 'Version',
      },
      {
        string: navigator.vendor,
        subString: 'iCab',
        identity: 'iCab',
      },
      {
        string: navigator.vendor,
        subString: 'KDE',
        identity: 'Konqueror',
      },
      {
        string: navigator.userAgent,
        subString: 'Firefox',
        identity: 'Firefox',
      },
      {
        string: navigator.vendor,
        subString: 'Camino',
        identity: 'Camino',
      },
      {
        // for newer Netscapes (6+)
        string: navigator.userAgent,
        subString: 'Netscape',
        identity: 'Netscape',
      },
      {
        string: navigator.userAgent,
        subString: 'MSIE',
        identity: 'Explorer',
        versionSearch: 'MSIE',
      },
      {
        string: navigator.userAgent,
        subString: 'Gecko',
        identity: 'Mozilla',
        versionSearch: 'rv',
      },
      {
        // for older Netscapes (4-)
        string: navigator.userAgent,
        subString: 'Mozilla',
        identity: 'Netscape',
        versionSearch: 'Mozilla',
      },
    ],
    dataOS: [
      {
        string: navigator.platform,
        subString: 'Win',
        identity: 'Windows',
      },
      {
        string: navigator.platform,
        subString: 'Mac',
        identity: 'Mac',
      },
      {
        string: navigator.userAgent,
        subString: 'iPhone',
        identity: 'iPhone/iPod',
      },
      {
        string: navigator.platform,
        subString: 'Linux',
        identity: 'Linux',
      },
    ],
  };

  if (typeof BrowserDetect.browser === 'undefined') {
    BrowserDetect.init();
  }
  const info = {
    info_os: BrowserDetect.OS,
    info_browser_version: BrowserDetect.version,
    BrowserDetect
  };
  if(info["info_os"]=="iPhone/iPod"||info["info_os"]=="Mac"||(info["info_os"]=="an unknown OS"&&(info["BrowserDetect"]["dataBrowser"][0]["string"].includes("iPad")||info["BrowserDetect"]["dataBrowser"][0]["string"].includes("iPone")||info["BrowserDetect"]["dataBrowser"][0]["string"].includes("iPod")))){
	if(info["info_browser_version"]=="an unknown version"){
		var re = /[0-9_]+(?= like Mac OS)/;
		let version_str = re.exec(info["BrowserDetect"]["dataBrowser"][0]["string"])[0].replaceAll("_",".");
		var version;
		var cnt;
		if(version_str.split(".").length-1>=2){//if the version string contains more than one dot, we will only take the numbers before the second dot to parse as float for comparsion
			for(let i=0, cnt=0; i<version_str.length; i++){
				if(version_str[i]=="."){
					if(cnt==0){
						cnt=1;
					}
					else if(cnt==1){
						version = parseFloat(version_str.substring(0,i));
						break;
					}
				}	
			}
		}
		else{
			version = parseFloat(version_str);
		}
		info["info_browser_version"] = version;
	}

	if(parseFloat(info["info_browser_version"])<=15.1){
		alert("Please upgrade your iOS to 15.2 or a newer version.");
	}
	else if(info["info_os"]=="an unknown OS"){
		alert("If your device is using iOS system. Please make sure to upgrade your iOS to 15.2 or a newer version!");
	}
   }
  return info;
}
const detectDevice = detect();
