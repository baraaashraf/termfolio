import config from '../../config.json'

import { detectBrowser,fetchIPAddress,fetchCountry } from "./detectBrowser";




export const devFetch = async (): Promise<string> => {    
    return`
            &&@@ @
           @@@@@@@@@            #&&@             About
          @@@@&@&(                &&&&@%          Title:        ${config.title}
         @@@@@@#                   @&&&@@         Name:         ${config.name}
        @@@@@@                    @@@@@@          Country:      ${config.country}
        @@@@@@                    &@@@@@         Guest      
        @@@@@@                    @@@@@@          OS:           ${navigator.platform}
        @@@@@@@@@@@@@@@@@@       @@@@@@           Browser:      ${detectBrowser()}
         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@            Ip Address:   ${await fetchIPAddress()}
          @@@@@@@@@@@@@@@@@@@@@@@@@@@             Country:      ${await fetchCountry()}
         @@@@@@@@@@@@@@@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@@@@               Contact
        @@@@@@@@@     @@@@@@@@@@@@@               <u><a href="${config.linkedin}">Linkedin</a></u>
        @@@@@@@       @@@@@@@    @
        #@@@@@@      @@@@@@@    @@
          @@@@@@@@@@@@@@@@@@@@@@
             #@@@@@@@@@@@@@@@
            @@@@@@@@@@@@@
           @@@@@@@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@@@@@@ @@@
         @@@@@@@@@@@@@@@@@@@@@@@@@@@ @
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @
        @@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@
        @@@@@@@@@@@@@@@@@@@@@@@@@@@    @@
        @ @@@@@@@@@ @@@@@ @@@@@@@  @    @
         @ @@@ @@@@  @@@@@@@&    @ @  @
              @@@@@@@   @@@@

`
}