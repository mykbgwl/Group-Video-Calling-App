import {createClient, createMicrophoneAndCameraTracks } from  "agora-rtc-react"

const appId= "8fb65c36c0c9457693795360dc7880a7"
const token= "0068fb65c36c0c9457693795360dc7880a7IAAyXIB8xeE3G0sfpDNS8D8mYW7NQITyODyLUGvpiCFJn2TNKL8AAAAAEADZzsCBuUw/YQEAAQC5TD9h"

export const config= {mode:"rtc", codec:"vp8",appId:appId, token:token};
export const useClient= createClient(config);
export const useMicrophoneAndCameraTracks= createMicrophoneAndCameraTracks();
export const channelName="main";