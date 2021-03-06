import React from 'react';
import { connect } from 'react-redux'
import numbers_help from '../../../../utils/numbers_help.js';
import timestamp_help from '../../../../utils/timestamp_help.js';
const { number_divide_thousands } = numbers_help();
const { yeardate } = timestamp_help();

class Index extends React.Component {
    render() {
        const { scroll, article_authorinfo, overall_data } = this.props;
        return (
            <div className="minor-area">
                <div className="sticky-wrap sticky" style={{ top: `${scroll ? '6.77rem' : '1.5rem'}` }}>
                    <div className="stat-block">
                        <div className="block-title">个人成就</div>
                        <div className="block-body">
                            <div className="stat-item">
                                {article_authorinfo ? (
                                    <React.Fragment>
                                        <svg t="1642079843323" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40356" width="64" height="64"><path d="M512 85.333333a42.666667 42.666667 0 0 1 3.2 85.226667L512 170.666667h-62.826667c-5.845333 0-11.477333 0.042667-16.917333 0.106666l-15.722667 0.298667-7.424 0.213333-14.08 0.64c-54.357333 2.986667-85.098667 11.392-115.946666 27.882667a189.952 189.952 0 0 0-79.274667 79.274667c-15.786667 29.568-24.192 59.029333-27.477333 109.248l-0.746667 13.589333c-0.213333 4.693333-0.384 9.578667-0.512 14.613333l-0.298667 15.722667-0.106666 16.917333v125.653334c0 5.845333 0.042667 11.477333 0.106666 16.917333l0.298667 15.722667 0.213333 7.424 0.64 14.08c2.986667 54.357333 11.392 85.098667 27.882667 115.946666a189.952 189.952 0 0 0 79.274667 79.274667c29.568 15.786667 59.029333 24.192 109.248 27.477333l13.589333 0.746667c4.693333 0.213333 9.578667 0.384 14.613333 0.512l15.722667 0.298667 16.917333 0.106666h125.653334l16.917333-0.106666 15.722667-0.298667 7.424-0.213333 14.08-0.64c54.357333-2.986667 85.098667-11.392 115.946666-27.882667a189.952 189.952 0 0 0 79.274667-79.274667c15.786667-29.568 24.192-59.029333 27.477333-109.248l0.746667-13.589333c0.213333-4.693333 0.384-9.578667 0.512-14.613333l0.298667-15.722667 0.106666-16.917333V512a42.666667 42.666667 0 0 1 85.226667-3.2L938.666667 512v62.826667c0 103.530667-10.496 156.586667-39.253334 210.346666a275.264 275.264 0 0 1-114.261333 114.261334c-52.010667 27.818667-103.381333 38.528-200.469333 39.189333l-9.856 0.042667h-125.653334c-103.530667 0-156.586667-10.496-210.346666-39.253334a275.264 275.264 0 0 1-114.261334-114.261333c-27.818667-52.010667-38.528-103.381333-39.189333-200.469333L85.333333 449.173333c0-103.530667 10.496-156.586667 39.253334-210.346666a275.264 275.264 0 0 1 114.261333-114.261334c52.010667-27.818667 103.381333-38.528 200.469333-39.189333L512 85.333333z m350.165333 76.501334a42.666667 42.666667 0 0 1 2.496 57.621333l-2.496 2.709333-330.666666 330.666667a42.666667 42.666667 0 0 1-62.826667-57.621333l2.496-2.709334 330.666667-330.666666a42.666667 42.666667 0 0 1 60.330666 0z" fill="#707070" p-id="40357"></path></svg>
                                        <span className="content">分享了<span className="count">{overall_data ? number_divide_thousands(overall_data.count) : 0}</span>篇文章</span>
                                    </React.Fragment>
                                ) : null}
                            </div>
                            <div className="stat-item">
                                {article_authorinfo ? (
                                    <React.Fragment>
                                        <svg t="1639067340274" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25355" width="64" height="64"><path d="M162.909091 372.363636a46.545455 46.545455 0 0 1 3.490909 92.974546L162.909091 465.454545a23.272727 23.272727 0 0 0-23.109818 20.549819L139.636364 488.727273v372.363636a23.272727 23.272727 0 0 0 23.272727 23.272727 46.545455 46.545455 0 1 1 0 93.090909 116.363636 116.363636 0 0 1-116.247273-111.313454L46.545455 861.090909V488.727273a116.363636 116.363636 0 0 1 116.363636-116.363637zM544.814545 0a128.069818 128.069818 0 0 1 128.069819 128.069818v145.92h197.585454c112.197818 0 156.299636 137.378909 113.873455 387.211637l-3.653818 20.596363c-40.96 223.115636-102.679273 294.912-208.360728 295.633455H349.090909a116.363636 116.363636 0 0 1-116.363636-116.363637V467.781818c0-30.696727 11.333818-56.971636 30.370909-82.874182 5.213091-7.121455 19.083636-23.947636 17.594182-22.039272l8.285091-10.752c54.365091-72.238545 92.695273-153.972364 115.083636-245.597091A139.636364 139.636364 0 0 1 539.694545 0z m0 93.090909h-5.12a46.545455 46.545455 0 0 0-45.218909 35.490909c-26.600727 108.986182-73.518545 206.382545-140.567272 291.770182 0-0.046545-2.141091 2.56-4.887273 5.957818l-10.914909 13.684364c-8.378182 11.403636-12.288 20.48-12.288 27.741091V861.090909a23.272727 23.272727 0 0 0 23.272727 23.272727h422.912c24.087273-0.162909 34.350545-3.793455 48.733091-20.968727 26.321455-31.464727 50.571636-97.629091 70.167273-208.221091 21.085091-118.993455 21.410909-202.542545 6.144-251.694545-8.797091-28.346182-18.013091-36.375273-26.577455-36.375273h-290.676363V128.069818c0-19.316364-15.639273-34.978909-34.955637-34.978909z" p-id="25356" fill="#707070"></path></svg>
                                        <span className="content">获得点赞<span className="count">{number_divide_thousands(article_authorinfo.got_digg_count)}</span>次</span>
                                    </React.Fragment>
                                ) : null}
                            </div>
                            <div className="stat-item">
                                {article_authorinfo ? (
                                    <React.Fragment>
                                        <svg t="1639066946494" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22866" width="64" height="64"><path d="M763.392 123.392C748.032 54.272 686.08 2.048 612.352 2.048H403.456C329.728 2.048 267.776 54.272 252.416 123.392c-102.4 17.408-180.224 106.496-180.224 213.504v469.504c0 119.296 97.28 216.576 216.576 216.576h437.76c119.296 0 216.576-97.28 216.576-216.576V336.896c0.512-107.008-77.824-196.096-179.712-213.504z m-359.936-50.688h208.896c33.28 0 61.44 19.456 75.264 47.616H328.192c13.312-28.16 41.984-47.616 75.264-47.616z m292.352 117.76c-3.584 43.52-39.424 77.824-83.456 77.824H403.456c-44.032 0-80.384-34.304-83.456-77.824h375.808z m177.152 615.936c0 80.384-65.536 146.432-146.432 146.432H288.768c-80.384 0-146.432-65.536-146.432-146.432V336.896c0-67.072 45.056-123.392 106.496-140.8 6.144 79.872 72.704 142.848 154.112 142.848h208.896c81.408 0 147.968-62.976 154.112-142.848 61.44 17.408 106.496 73.728 106.496 140.8l0.512 469.504z" p-id="22867" data-spm-anchor-id="a313x.7781069.0.i42" fill="#707070"></path><path d="M358.912 625.664c-0.512-119.296 75.776-189.44 172.032-189.952 52.224-0.512 88.576 22.016 112.128 45.568l-38.4 46.08c-17.92-16.896-38.4-30.208-71.168-29.696-59.904 0.512-101.888 47.616-101.376 124.928 0.512 78.336 36.864 125.44 107.52 125.44 17.408 0 35.328-5.12 45.056-13.824l-0.512-71.168-64 0.512-0.512-58.88 128.512-1.024 1.024 162.816c-24.064 24.064-66.56 44.032-116.736 44.032-97.792 0.512-173.056-64.512-173.568-184.832z" p-id="22868" data-spm-anchor-id="a313x.7781069.0.i43" fill="#707070"></path></svg>
                                        <span className="content">文章被阅读<span className="count">{number_divide_thousands(article_authorinfo.got_view_count)}</span></span>
                                    </React.Fragment>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    {article_authorinfo ? (
                        <div className="follow-block">
                            <div className="follow-item">
                                <div className="item-title">关注</div>
                                <div className="item-count">{number_divide_thousands(article_authorinfo.followee_count)}</div>
                            </div>
                            <div className="follow-item">
                                <div className="item-title">粉丝</div>
                                <div className="item-count">{number_divide_thousands(article_authorinfo.fans_count)}</div>
                            </div>
                        </div>
                    ) : (undefined)}
                    {article_authorinfo ? (
                        <div className="more-block">
                            <div className="more-item">
                                <div className="item-title">加入于</div>
                                <div className="item-count">
                                    <time className="time">{yeardate('YYYY-mm-dd', article_authorinfo.register_time)}</time>
                                </div>
                            </div>
                        </div>
                    ) : (undefined)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        scroll: state.scroll,
        overall_data: state.overall_data,
        article_authorinfo: state.article_authorinfo,
    }
}
export default connect(mapStateToProps)(Index);