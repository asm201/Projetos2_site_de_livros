import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, from, map, of, pluck, switchMap } from 'rxjs';
import { Channel } from 'stream-chat';
import { ChannelActionsContext, ChannelPreviewContext, ChannelService, ChatClientService, CustomTemplatesService, DefaultStreamChatGenerics, StreamI18nService } from 'stream-chat-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatIsReady$!: Observable<boolean>
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
    private auth: AuthService,
    private router: Router
  ) {}

ngOnInit() {
    this.channelService.reset()
    this.streamI18nService.setTranslation();
    this.chatIsReady$ = this.auth.getStreamToken().pipe(
      switchMap((streamToken) => this.chatService.init(
        environment.stream.key,
        this.auth.getCurrentUser().uid, 
        streamToken)),
      switchMap(() => this.channelService.init({
        type: 'messaging',
        members: { $in: [this.auth.getCurrentUser().uid] },
      })),
      map(() => true),
      catchError(() => of(false))
    )
  }

}
