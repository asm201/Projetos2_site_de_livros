import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatClientService, ChannelService, StreamI18nService } from 'stream-chat-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(private http: HttpClient,private route: ActivatedRoute, private chatService: ChatClientService, private channelService: ChannelService, private streamI18nService: StreamI18nService) {
    const apiKey = 'v3kha4qgwkm3';
    const user: any = this.route.snapshot.paramMap.get('iduser')
    console.log(this.api(`http://localhost:3002/json/${user}`).subscribe(data => {this.a = data}))
    console.log(this.a)
   }
   
  a:string = ''
   async ngOnInit() {
/*
    const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular', {
      // add as many custom fields as you'd like
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Talking about Angular',
    });
    await channel.create();
    this.channelService.init({
      type: 'messaging',
      id: { $eq: 'talking-about-angular' },
    });*/
  }

  api(url: string){
    let value
    return this.http.get<any>(url)
  }


}
