var React = require("react");
var $ = require("jquery");
var Header = React.createClass({
    render : function () {
        return (
            <div>
                <Logo/>
                <Rdom/>
                <div class="nav">
                    <Navli/>
                </div>
            </div>
        )
        
    }
});

var Logo = React.createClass({
    render : function () {
        return (
                <div class="logo">
                    <a href="#" id="top"><img src="images/logo.gif" alt="南京卓鼎干燥设备厂"/></a>
                </div>
            );
    }
});

var Rdom = React.createClass({
    render : function () {
        return (
                <div class="r">
                    <a href="#" class="e1"></a>
                    <a href="mailto:zmxd-2008@163.com" class="e2"></a>
                    <a href="#" class="e3"></a>
                </div>
            );
    }
});

var Navli = React.createClass({
    getInitialState : function () {
        return {
            navData : []
        }
    },
    componentWillMount : function () {
        var _t = this;
        $.ajax({
            "url":"http://demo.yhcms.cn/index.php/Api/getlist?type=category&cid=0&fn=nocallback",
            "type" : "get",
            "success" : function (res) {
                var res = JSON.parse(res);
                _t.setState({
                    navData : res['data']
                });
            }, 
        });
    },
    render : function () {
        var aLi = [];
        var navData = this.state.navData;
        for(var i=0; i<navData.length; i++) {
            aLi.push(<li><h3><a href="/">{navData[i]['name']}</a></h3></li>);
        }
        /*

            <ul>
                            <li><a href="#">企业简介</a></li>
                            <li><a href="#">企业文化</a></li>
                            <li><a href="#">企业荣誉</a></li>
                            <li><a href="#">成功案例</a></li>
                        </ul>
        */
        return (
                <ul id="nav">
                    <li>
                        <h3><a href="/">首页</a></h3>
                    </li>
                    {aLi}
                    
                </ul>
            );
    }
});

module.exports = Header;




