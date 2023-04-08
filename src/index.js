import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの入力を取得し、インプットを初期化する
  const inputText = document.getElementById("add-text").value;
  // alert(inputText);
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteIncompleteItem = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //  //li生成
  const li = document.createElement("li");
  li.className = "list-row";
  // console.log(li);

  //p生成
  const p = document.createElement("p");
  //関数化による変更 p.innerText = inputText;
  p.innerText = text;
  // console.log(p);

  //completeButton生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //-completeButtonのクリック処理
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteIncompleteItem(completeButton.parentNode);

    //完了ボタンの親要素を取得し最初の子であるpタグからテキスト取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //li以下を初期化
    addTarget.textContent = null;

    //完了リストに追加する要素
    //-p要素を作成し取得していたtextを埋め込む
    const p = document.createElement("p");
    p.innerText = text;
    //-backButton生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //-backButtonのクリック処理
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //初期化済みのliに完了用の要素を詰め込む
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了済みリストに完了Todoを追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //deleteButton生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  //-deleteButtonのクリック処理
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteIncompleteItem(deleteButton.parentNode);
    // 関数化 const deleteTarget = deleteButton.parentNode;
    //       document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //liの子要素にp,button*2を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  // console.log(li);
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
