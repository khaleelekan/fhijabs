import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
        sections: [{
            title: 'premium scarfs',
            imageUrl: 'scarf.jpeg',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'innercap',
            imageUrl: 'innercap.jpeg',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'vintage scarf',
            imageUrl: 'vintage-scarf.jpeg',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'crease scarf',
            imageUrl: 'crease-scarf.jpeg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'premium chiffon',
            imageUrl: 'premium-chiffon.jpeg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          },
          {
            title: 'jersey scarf',
            imageUrl: 'jersey-scarf.jpeg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          },
          {
            title: 'brooch magnet',
            imageUrl: 'brooch-magnet.jpeg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          },
          {
            title: 'no snag magnet',
            imageUrl: 'no-snag-magnet.jpeg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }

        ]
      }
    }
    render(){
        return(
            <div className="directory-menu"> {
            this.state.sections.map(({title, imageUrl, id, size}) =>
            (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>))
    }
            </div>
        )
    }
}

export default Directory;