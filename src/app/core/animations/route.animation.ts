import { trigger, transition, query, style, animate, group } from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('* => bottom', slideToBottom()),
  ]);

function slideToBottom() {
  const optional = { optional: true };
  return [
    query(':enter', [
      style({
        position: 'absolute',
        bottom: 0,
        width: '100%',
        top: '-100%',
      })
    ], optional),
    group([
      query(':enter', [
        animate('0.6s ease', style({ top: '0' }))
      ], optional),
    ])
  ];
}
