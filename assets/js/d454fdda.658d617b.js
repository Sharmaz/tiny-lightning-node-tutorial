"use strict";(self.webpackChunktiny=self.webpackChunktiny||[]).push([[151],{8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}},8719:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"initialization","title":"Initialization","description":"Set up the hardware and install system dependencies","source":"@site/docs/initialization.md","sourceDirName":".","slug":"/initialization","permalink":"/tiny-lightning-node-tutorial/initialization","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Initialization","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Initialization","permalink":"/tiny-lightning-node-tutorial/Initialization"},"next":{"title":"Lightning Node","permalink":"/tiny-lightning-node-tutorial/Node"}}');var r=i(4848),s=i(8453);const o={title:"Initialization",sidebar_position:2},l=void 0,d={},c=[{value:"Set up the hardware and install system dependencies",id:"set-up-the-hardware-and-install-system-dependencies",level:2},{value:"Install the OS",id:"install-the-os",level:3},{value:"Connect to the Internet",id:"connect-to-the-internet",level:3},{value:"Access your device&#39;s command line",id:"access-your-devices-command-line",level:3},{value:"Install some dependencies for later",id:"install-some-dependencies-for-later",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"set-up-the-hardware-and-install-system-dependencies",children:"Set up the hardware and install system dependencies"}),"\n",(0,r.jsx)(n.h3,{id:"install-the-os",children:"Install the OS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Download debian bookworm from ",(0,r.jsx)(n.a,{href:"http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/service-and-support/Orange-Pi-Zero-2W.html",children:"OrangePi's website"})]}),"\n",(0,r.jsxs)(n.li,{children:["Unzip and flash the OS image to the SD card using ",(0,r.jsx)(n.a,{href:"http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/service-and-support/Orange-Pi-Zero-2W.html",children:"Balena Etcher"})," (for most people) or ",(0,r.jsx)(n.a,{href:"https://superuser.com/a/351815",children:(0,r.jsx)(n.code,{children:"dd"})})," (for advanced users who can't get Balena working on Linux, like me)"]}),"\n",(0,r.jsx)(n.li,{children:"Put the flashed SD card into the OPi's SD card slot"}),"\n",(0,r.jsx)(n.li,{children:"Plug the power supply into the wall"}),"\n",(0,r.jsx)(n.li,{children:"Plug the power adapter's USB-C connector into one of the USB-C ports on the OPi"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"connect-to-the-internet",children:"Connect to the Internet"}),"\n",(0,r.jsx)(n.p,{children:"Decide whether you're using Wifi or Ethernet. Then:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Wifi: must be set up using either:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"wpa supplicant (you can do this by editing the sd card after flashing it), or"}),"\n",(0,r.jsx)(n.li,{children:"an ethernet cable to connect the OPi to your router or to your laptop using Internet Connection Sharing (see below for connecting ethernet)"}),"\n",(0,r.jsx)(n.li,{children:"using your monitor, keyboard, and mouse, log into the desktop environment, and configure Wifi in the OS settings"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Ethernet: connect your OPi to your router using your cable","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Since the OPi itself does not have an Ethernet port, you will need either:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["a ",(0,r.jsx)(n.a,{href:"https://www.amazon.com/USB-Ethernet-Adapter-Gigabit-Switch/dp/B09GRL3VCN",children:"USB-C-to-Ethernet adapter"})]}),"\n",(0,r.jsxs)(n.li,{children:["or the ",(0,r.jsx)(n.a,{href:"https://www.amazon.com/Orange-Pi-Zero-2W-Development/dp/B0CHMSPZVD",children:"expansion board"})," which is $5 more"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"access-your-devices-command-line",children:"Access your device's command line"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'If using a desktop image with a monitor, just open the Terminal app (windows/Super key then type "terminal" + Enter)'}),"\n",(0,r.jsxs)(n.li,{children:["If connecting via SSH:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["run ",(0,r.jsx)(n.code,{children:"ip a | grep inet"})," which should yield your LAN IP address. Grab the first 3 sections of this IP (usually something like ",(0,r.jsx)(n.code,{children:"192.168.100"}),"), then"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sudo nmap -sP <1st.3.sections.0/24, for example 192.168.100.0/24>"})," to scan for the OPi's IP, then"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ssh orangepi@<OPi's IP>"})," and password ",(0,r.jsx)(n.code,{children:"orangepi"})," to log into it (consider changing the password for security)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"install-some-dependencies-for-later",children:"Install some dependencies for later"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo apt update\nsudo apt install docker.io qrencode\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add yourself to the ",(0,r.jsx)(n.code,{children:"docker"})," group so you can execute docker commands without ",(0,r.jsx)(n.code,{children:"sudo"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo usermod -aG docker $USER\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can log out and log back into reflect the changes, or just do"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"su - $USER\n"})}),"\n",(0,r.jsx)(n.p,{children:"to reload your shell."}),"\n",(0,r.jsxs)(n.p,{children:["Check to see if your user appears in the ",(0,r.jsx)(n.code,{children:"docker"})," group now:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"groups\n"})}),"\n",(0,r.jsx)(n.p,{children:"Test to make sure you have access to the docker daemon now:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker ps\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see something like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"orangepi@orangepizero2w:~$ docker ps\nCONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n"})}),"\n",(0,r.jsx)(n.p,{children:"If so, you're good to go to the next step: setting up your Lightning server!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);