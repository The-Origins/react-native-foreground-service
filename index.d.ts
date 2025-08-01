// index.d.ts
export interface NotificationConfig {
  channelId: string;
  id: number;
  title: string;
  text: string;
  icon: string;
  priority?: -2 | -1 | 0 | 1 | 2;
  button?: string;
}

export interface NotificationChannelConfig {
  id: string;
  name: string;
  description?: string;
  importance?: 1 | 2 | 3 | 4 | 5;
  enableVibration?: boolean;
}

export type ForegroundServiceEvent = "VIForegroundServiceButtonPressed";

export class VIForegroundService {
  static getInstance(): VIForegroundService;

  createNotificationChannel(
    channelConfig: NotificationChannelConfig
  ): Promise<void>;

  startService(notificationConfig: NotificationConfig): Promise<void>;

  stopService(): Promise<void>;

  on(event: ForegroundServiceEvent, handler: (eventData: any) => void): void;

  off(
    event: ForegroundServiceEvent,
    handler?: (eventData: any) => void
  ): void;
}

declare const VIForegroundServiceClass: typeof VIForegroundService;
export default VIForegroundServiceClass;
