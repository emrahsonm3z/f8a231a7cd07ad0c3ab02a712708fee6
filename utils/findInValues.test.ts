import { Product } from '~/containers/product/types/Product'

import { findInValues } from './findInValues'

const productList: Product[] = [
  {
    body_html:
      '<p><em>This is a demonstration store. You can purchase products like this from <a href="//skiandscuba.com" target="_blank">The Ski Chalet &amp; Treasure Cove Scuba</a>.</em></p>\n<ul>\n<li><span style="line-height: 1.2;">POWER TURN ROCKER</span></li>\n<li><span style="line-height: 1.2;">EASYDRIVE SIDECUTS</span></li>\n<li><span style="line-height: 1.2;">CAP 3D TOPSHEET</span></li>\n<li><span style="line-height: 1.2;">COMPOSITE CORE</span></li>\n<li><span style="line-height: 1.2;">FIBERGLASS</span></li>\n<li><span style="line-height: 1.2;">TI</span></li>\n<li><span style="line-height: 1.2;">XELIUM</span></li>\n</ul>\n<meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8">\n<p> </p>',
    handle: 'rossignol-pursuit-12-ti-xelium-mens-skis-xel-110-b73-bindings-2015',
    id: 7550807507163,
    image:
      'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy.jpg?v=1645622311',
    price: '299.00',
    title: '12 Ti Xelium Skis'
  },
  {
    body_html:
      '<p><em>This is a demonstration store. You can purchase products like this from <a href="//skiandscuba.com" target="_blank">The Ski Chalet &amp; Treasure Cove Scuba</a>.</em></p><ul>\n<li><span style="line-height: 1.2;">POWER TURN ROCKER</span></li>\n<li><span style="line-height: 1.2;">H TECHNOLOGY</span></li>\n<li><span style="line-height: 1.2;">IPS DIAMOND MINICAP SANDWICH</span></li>\n<li><span style="line-height: 1.2;">WOOD</span></li>\n<li><span style="line-height: 1.2;">FIBERGLASS</span></li>\n<li><span style="line-height: 1.2;">V.A.S TI BASALT</span></li>\n<li><span style="line-height: 1.2;">TPX</span></li>\n</ul>\n<meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8"><meta charset="utf-8">',
    handle: 'rossignol-pursuit-16-ti-mens-skis-axl-3-120-tpx-bindings-2015',
    id: 7550807539931,
    image:
      'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy_copy.jpg?v=1645622312',
    price: '599.00',
    title: '16 Ti Skis'
  },
  {
    body_html:
      '<p><em>This is a demonstration store. You can purchase products like this from <a href="//skiandscuba.com" target="_blank">The Ski Chalet &amp; Treasure Cove Scuba</a>.</em></p><ul>\n<li><span style="line-height: 1.4;">Sidecut 126 - 74 - 111 mm</span></li>\n<li><span style="line-height: 1.4;">Ski Radius 13m</span></li>\n<li><span style="line-height: 1.4;">Rocker height POWER TURN ROCKER</span></li>\n<li><span style="line-height: 1.4;">Profile sidecuts PROP TECH</span></li>\n<li><span style="line-height: 1.4;">Structure MINICAP SANDWICH</span></li>\n<li><span style="line-height: 1.4;">Core WOOD</span></li>\n<li><span style="line-height: 1.4;">Construction reinforcements CARBON</span></li>\n<li><span style="line-height: 1.4;">Construction other 3D TOPSHEET</span></li>\n<li><span style="line-height: 1.4;">System XELIUM</span></li>\n</ul>',
    handle: 'rossignol-pursuit-200-carbon-xelium-skis-xelium-110-b83-bindings-2016',
    id: 7550807146715,
    image:
      'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_0e643c53-37f0-4e32-b8ae-6f38408eb1a4.jpg?v=1645622296',
    price: '399.00',
    title: '200 Carbon Skis'
  },
  {
    body_html:
      '<p><em>This is a demonstration store. You can purchase products like this from <a href="//skiandscuba.com" target="_blank">The Ski Chalet &amp; Treasure Cove Scuba</a>.</em></p><ul>\n<li>\n<span style="line-height: 1.5;">Radius:</span><span style="line-height: 1.5;"> 14m @ 167</span>\n</li>\n<li>\n<span style="line-height: 1.5;">Construction:</span><span style="line-height: 1.5;"> Mod Technology, Cap Construction, Composite Core</span>\n</li>\n<li>\n<span style="line-height: 1.5;">Features:</span><span style="line-height: 1.5;"> Mod Technology</span>\n</li>\n<li><span style="line-height: 1.2;">*Graphic colors may vary</span></li>\n<li><strong style="line-height: 1.2;">*SKI ONLY-NO BINDING</strong></li>\n</ul>',
    handle: 'k2-amp-72-mens-skis-flat-2015',
    id: 7550807900379,
    image:
      'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy_67d61531-913e-4553-993f-07b010aa01d0.jpg?v=1645622327',
    price: '225.00',
    title: '72 Skis'
  },
  {
    body_html:
      '<p><em>This is a demonstration store. You can purchase products like this from <a href="//skiandscuba.com" target="_blank">The Ski Chalet &amp; Treasure Cove Scuba</a>.</em></p><ul>\n<li>Auto Turn Rocker</li>\n<li>Extended Sidecut</li>\n<li>Air Tip</li>\n<li>Poplar Wood Core</li>\n</ul>',
    handle: 'rossignol-experience-75-dark-skis-xelium-100-bindings-2016',
    id: 7550806982875,
    image:
      'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy_copy_copy_5430fa6a-8548-468f-9620-3b50a2d31515.jpg?v=1645622289',
    price: '449.00',
    title: '75 Dark Skis'
  }
]

describe('findInValues', () => {
  it('search was successfully performed', () => {
    expect(findInValues(productList, 'Xelium').length).toBeGreaterThan(0)
  })
})
