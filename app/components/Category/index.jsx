import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import ReactSwipe from 'react-swipe'
import './index.less'
class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const opt = {
      auto: 3000,
      callback: index => {
        this.setState({ index });
      }
    }
    return (
      <div className="category">
        <ReactSwipe swipeOptions={opt}>
          <div className="category-page">
            <Link to="/search/meishi">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png" />
                <div>美食</div>
              </div>
            </Link>
            <Link to="/search/maoyan">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20170223152109dp_wx_maoyan_icon.png" />
                <div>猫眼电影</div>
              </div>
            </Link>
            <Link to="/search/jiudian">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126203337jiudian.png" />
                <div>酒店</div>
              </div>
            </Link>
            <Link to="/search/xxyl">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126202841xiuxianyule.png" />
                <div>休闲娱乐</div>
              </div>
            </Link>
            <Link to="/search/waimai">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126203251waimai.png" />
                <div>外卖</div>
              </div>
            </Link>
            <Link to="/search/huoguo">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160204172927huoguo.png" />
                <div>火锅</div>
              </div>
            </Link>
            <Link to="/search/liren">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126202946liren.png" />
                <div>丽人</div>
              </div>
            </Link>
            <Link to="/search/zhoubianyou">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126203542ktv.png" />
                <div>周边游</div>
              </div>
            </Link>
            <Link to="/search/ktv">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126203440zhoubianyou.png" />
                <div>KTV</div>
              </div>
            </Link>
            <Link to="/search/hssy">
              <div className="item">
                <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126203830jiehun.png" />
                <div>婚纱摄影</div>
              </div>
            </Link>
          </div>
          <div className="category-page">
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20170308125500community_new.png" />
              <div>生活服务</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126205135jingguan.png" />
              <div>景点</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126203742aiche.png" />
              <div>爱车</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126203617jianshen.png" />
              <div>运动健身</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160314121215icongouwu135.png" />
              <div>购物</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126203905qinzi.png" />
              <div>亲子</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20161213162031zhuangxiu.png" />
              <div>家装</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/gp/cms/1455525720807.png" />
              <div>学习培训</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126204327yiliao.png" />
              <div>医疗健康</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160126203812daojia.png" />
              <div>到家</div>
            </div>
          </div>
          <div className="category-page">
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160204173331xiaochikuaican.png" />
              <div>小吃快餐</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160204173511zizhucan.png" />
              <div>自动餐</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160316142804meifa.png" />
              <div>美发</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160316143047meijia.png" />
              <div>美甲美睫</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160316143239meirong.png" />
              <div>美容SPA</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160316143316shoushen.png" />
              <div>瘦身纤体</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160316143612qinzisheying.png" />
              <div>亲子摄影</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160316143656qinziyoule.png" />
              <div>亲子游乐</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160316143755youerjiaoyu.png" />
              <div>幼儿教育</div>
            </div>
            <div className="item">
              <img className="icon" src="//www.dpfile.com/sc/eleconfig/20160125182200more.png" />
              <div>全部分类</div>
            </div>
          </div>
        </ReactSwipe>
        <ul className="circles">
          <li className={this.state.index === 0 ? 'active' : ''}></li>
          <li className={this.state.index === 1 ? 'active' : ''}></li>
          <li className={this.state.index === 2 ? 'active' : ''}></li>
        </ul>
      </div>
    )
  }
}

export default Category
