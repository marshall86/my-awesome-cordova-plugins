import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
// import { Observable } from 'rxjs';

export interface IOSJumioCustomization {
  iProovLineColor: string;
  iProovHeaderTextColor: string;
  iProovHeaderBackgroundColor: string;
  iProovPromptTextColor: string;
  iProovFooterBackgroundColor: string;
  iProovCloseButtonTintColor: string;
  iProovLivenessAssurancePrimaryTintColor: string;
  iProovLivenessAssuranceSecondaryTintColor: string;
  iProovGenuinePresenceAssuranceProgressBarColor: string;
  iProovGenuinePresenceAssuranceNotReadyTintColor: string;
  iProovGenuinePresenceAssuranceReadyTintColor: string;
  iProovAnimationForeground: string;
  iProovAnimationBackground: string;
  iProovFloatingPromptEnabled: string;
  primaryButtonBackground: string;
  primaryButtonBackgroundPressed: string;
  primaryButtonBackgroundDisabled: string;
  primaryButtonText: string;
  secondaryButtonBackground: string;
  secondaryButtonBackgroundPressed: string;
  secondaryButtonBackgroundDisabled: string;
  secondaryButtonText: string;
  bubbleBackground: string;
  bubbleForeground: string;
  bubbleBackgroundSelected: string;
  bubbleCircleItemForeground: string;
  bubbleCircleItemBackground: string;
  bubbleSelectionIconForeground: string;
  loadingCirclePlain: string;
  loadingCircleGradientStart: string;
  loadingCircleGradientEnd: string;
  loadingErrorCircleGradientStart: string;
  loadingErrorCircleGradientEnd: string;
  loadingCircleIcon: string;
  scanOverlay: string;
  scanOverlayFill: string;
  scanOverlayTransparent: string;
  scanOverlayBackground: string;
  nfcPassportCover: string;
  nfcPassportPageDark: string;
  nfcPassportPageLight: string;
  nfcPassportForeground: string;
  nfcPhoneCover: string;
  scanViewBubbleForeground: string;
  scanViewBubbleBackground: string;
  scanViewForeground: string;
  scanViewAnimationBackground: string;
  scanViewAnimationShutter: string;
  searchBubbleBackground: string;
  searchBubbleForeground: string;
  searchBubbleListItemSelected: string;
  navigationIconColor: string;
  textForegroundColor: string;
  primaryColor: string;
}

/**
 * @name devereJumioIntegrationOriginal
 * @premier devereJumioIntegrationOriginal
 * @description Jumio Ionic upgrade to latest sdk version
 * @usage
 * ```typescript
 * import { Deeplinks } from '@awesome-cordova-plugins/deeplinks/ngx';
 *
 * constructor(private deeplinks: Deeplinks) { }
 *
 * this.deeplinks.route({
 *      '/about-us': AboutPage,
 *      '/universal-links-test': AboutPage,
 *      '/products/:productId': ProductPage
 *    }).subscribe(match => {
 *      // match.$route - the route we matched, which is the matched entry from the arguments to route()
 *      // match.$args - the args passed in the link
 *      // match.$link - the full link data
 *      console.log('Successfully matched route', match);
 *    }, nomatch => {
 *      // nomatch.$link - the full link data
 *      console.error('Got a deeplink that didn\'t match', nomatch);
 *    });
 * ```
 */
@Plugin({
  pluginName: 'devereJumioIntegration',
  plugin: 'dVjumio',
  pluginRef: 'dvJumio',
  repo: 'https://github.com/marshall86/my-awesome-cordova-plugins',
  install: 'ionic cordova plugin add dVjumio',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Deeplinks extends AwesomeCordovaNativePlugin {
  @Cordova()
  initialize(authorizationToken: string, dataCenter: string): Promise<any> {
    return;
  }

  @Cordova()
  start(successCallback: any, errorCallback: any, customization: IOSJumioCustomization): Promise<any> {
    return;
  }
}
