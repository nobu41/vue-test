// 【DOMを直接参照する $el と $refs】
// リアルなDOMのアクセス（＝要素の画面上の位置や高さなど）はDOMでなければわからない
// DOMのアクセスには $el と $refs　を使う。
// このプロパティはDOM参照のためにライフサイクハックのmounted以降を使う必要がある。

// 【$elの使い方】
// ルートやコンポーネントのテンプレートを囲んでいるルート要素は、
// インスタンスプロパティの　$el を使って参照する
//これによりライフサイクルのmoutend以降で使用できるようになるため、
//コンポーネント化した<canvas>要素にアクセスしたいときなどに使える

// 【$refsの使い方】
//ルート以外の要素は特別な属性 ref とインスタンスプロパティの$refsを使用します。
//まずテンプレートで対象となる要素にref属性で名前を付け。
//インスタンスのメソッド内から this.$refs.hello（任意の名前） でアクセスできる。
//めっちゃ便利らしい・・・覚えること

//【$el や $refs は一時的な更新のため注意】
//$el や $refs 仮想DOM ではないため操作するたびに描画するためDOMの更新には向かない
//以下のように$refs を使ってDOMを操作してもデータに変化があれば仮想DOMによって上書きされることがある
//例：カウントアップをして増加させてもv-ifの切り替えを行うと値が初期の 0 に戻ってしまう。
// リアルなDOMの変更は仮想DOMに対して影響を与えないため

var app = new Vue({
    el: '#app',
    data:{
        show: true
    },
    methods:{
        handleClick () {
            var count = this.$refs.count
            if (count) {
                count.innerText = parseInt(count.innerText,10) + 1
            }
        }
    },
    mounted: function() {
        console.log(this.$el)
        //以下がコンソールに表示される = ルートが表示されるね
        //<div id="app">...略...</div>
        console.log(this.$refs.hello)
        //以下がコンソールに表示される = ref="hello"を指定した要素が配下も含め表示される
        //<p>HELLO</p>
    }
})
