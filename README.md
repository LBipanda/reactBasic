2. ES6小知识点:解构赋值+重命名
    1et obj = {a:{b:1}}
    const {a} = obj; //传统解构赋值
    const {a:{b}} = obj; //连续解构赋值
    const {a:{b:value}} = obj; //连续解构赋值+重命名
3.消息订阅与发布机制
    1.先订阅，再发布(理解:有-种隔空对话的感觉)
    2.适用于任意组件问通信
    3.要在组件的componentWillUnmount中取消订阅
4.fetch发送请求(关注分离的设计思想)
    try {
        const response= await fetch( /api1/search/ users2?q=${keyWord}^ )
        const data = await response. json( )
        console.1og(data);
    } catch (error) {
        conso1e.1og('请求出错,error);
    }

    