import React from 'react'
import { Bubbles } from 'gobi-web-integration';
import '@gobistories/gobi-web-integration'

function stroies() {
    return (
        new gobi.Bubbles({
            container: '#gobi-module-container',
            //set this to match your web page
            color: '#2CA6FC',
            bubbleSize: '110px',
            animatedBubble: true,
            isFullHeightMobile: true,
            showPlayIcon: true,
            autoSegue: true,
            playerOptions: {
              autoStartWithSound: true,
            },
            stories: [
              //replace with your stories
              {id: 'zt4kt'},
              {id: 'k85k5'},
              {id: 'pz2pm', title: 'Lasse i Bookis', bubbleSrc: 'https://bookis.com/images/svg/logo-full.svg'},
            ],
        })
    )
}

export default stroies
