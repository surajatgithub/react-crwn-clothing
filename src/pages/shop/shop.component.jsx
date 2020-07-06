import React from "react";

import CollectionPreview from "./../../components/collection-preview/collection-preview.component";

import ShopData from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionOtherData }) => {
          return <CollectionPreview key={id} {...collectionOtherData} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
