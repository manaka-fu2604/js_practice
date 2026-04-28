// function関数式 → OK
const withFunction = {
    rec: 'OK',
    isGood: function() {
      console.log(this.rec);  // 使える
    },
  };
  
  // アロー関数 → NG
  //（thisでプロパティが読み込めない）
  const allowFunction = {
    rec: 'NG',
    isGood: () => {
      console.log(this.rec);  // 使えない
    },
  }
  
  // メソッド特有の記法 → 推奨
  const withoutFunction = {
    rec: 'Recommended!!',
    isGood() {
      console.log(this.rec);  // 使える
    },
  }