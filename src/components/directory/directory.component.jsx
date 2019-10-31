import React from 'react';
import styled from 'styled-components';

import Menu from '../menu-item/menu-item.component';

const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'mens'
        }
      ]
    };
  }

  render() {
    return (
      <DirectoryContainer>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Menu key={id} {...otherSectionProps} />
        ))}
      </DirectoryContainer>
    );
  }
}
