import React from 'react'
import Reflux from 'reflux'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

import Item from './components/products/item'
import Header from './components/header/header'
import Footer from '../../footer'

import store from './stores/category-products-store'
import actions from './actions/product-actions'

var CategoryProduct = React.createClass({
  mixins: [Reflux.connect(store), Reflux.ListenerMixin],

  componentDidMount() {
    actions.loadProductsByCategory(this.props.params.category);
  },

  render() {
    var items = this.state.products.map((item, i) => {
      item.type = this.props.params.category;
      return <Item key={item.id} item={item} id={item.id} index={i} />;
    });

    var style = {height: this.props.height};
    var titleMapping = {
      self_sale: '开街县货',
      kaixian_special: '开县特产',
      imported: '进口商品',
      daily_usage: '生活用品',
      wine_drink: '食品酒水',
      beautify: '美妆护肤',
      camera: '数码相机',
      home_machine: '家用电器',
      heritage: '非物质文化遗产',
      green: '绿色食品',
      organic: '有机食品',
      foundation: '农产品地理标志',
      sea_food: "水产",
      bacon: "腊肉",
      navel_orange: "脐橙",
      pomelo: "蜜柚",
      seasonal_fresh: "时令生鲜",
      gin: "松子酒",
      wine: "白酒",
      grape_wine: "葡萄酒",
      wine_drink: "美酒佳酿",
      dendrobii: "石斛",
      wolfberry: "枸杞",
      honey: "蜂蜜",
      nourishing_health: "滋补养生",
      drink: "冲饮",
      herbal_tea: "花草茶",
      green_tea: "绿茶",
      red_tea: "红茶",
      drink_tea: "茗茶冲饮",
      seafood: "海味",
      fried: "炒货",
      candied_fruit: "蜜饯",
      snacks: "休闲零食",
      flavor: "调味",
      dry_goods: "干货",
      oil: "油",
      rice: "米",
      grain_oil: "粮油调味",
      dade: "大德",
      zhuxi: "竹溪",
      zishui: "紫水",
      manyue: "满月",
      vilage: "乡镇",
      xiangcuntuhuo: "乡村土货",
      gongyichanpin: "工业产品",
      xianwaichanping: "县外产品"
    };

    return (
      <div className='products-container' style={style}>
        <div className='product-sub-page'>
          <div className='product-list-container'>
            <h1>{titleMapping[this.props.params.category]}</h1>
        {this.props.children}
            <ReactCSSTransitionGroup component="ul" className="pure-g appItems list-reset" id="item-group"  transitionName="itemTransition" transitionLeave={false}>
          {items}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
});

export default CategoryProduct

