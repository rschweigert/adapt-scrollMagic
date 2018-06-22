require.config({
  // map: {
  //   "*": {
  //     // 'libraries/scrollMagic/plugins/jquery.ScrollMagic': 'libraries/scrollMagic/ScrollMagic',
  //     'src/extensions/adapt-scrollMagic/libraries/scrollMagic/plugins/debug.addIndicators': 'src/extensions/adapt-scrollMagic/libraries/scrollMagic/ScrollMagic'
  //   }
  // }

  paths: 'addIndicators',

  shim: {
    'addIndicators': {
      deps: ['libraries/scrollMagic/ScrollMagic']
    }
  }
});

define([
  'coreJS/adapt',
  'libraries/scrollMagic/ScrollMagic',
  // 'libraries/scrollMagic/plugins/debug.addIndicators'
], function(Adapt, ScrollMagic, AddIndicators) {

  function onViewReady(view) {
    console.log(ScrollMagic);

    var controller = new ScrollMagic.Controller();

    $('.block').each(function() {
        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          reverse: true
        })
        .setClassToggle(this, 'fade-in')
        // .addIndicators()
        .addTo(controller);
      });

  }


  Adapt.once("app:dataReady").on({
    "menuView:ready pageView:ready": onViewReady
  });
});
