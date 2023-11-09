import{_ as t,o as d,c as r,e}from"./app-5de3c553.js";const a={},p=e('<figure class="highlight java"><figcaption data-lang="java"></figcaption><div class="code-container"><table><tr><td data-num="1"></td><td><pre>class Solution {</pre></td></tr><tr><td data-num="2"></td><td><pre>  public ListNode partition(ListNode head, int x) {</pre></td></tr><tr><td data-num="3"></td><td><pre>      // 存放小于 x 的链表的虚拟头结点</pre></td></tr><tr><td data-num="4"></td><td><pre>      ListNode dummy1 = new ListNode(-1);</pre></td></tr><tr><td data-num="5"></td><td><pre>      // 存放大于等于 x 的链表的虚拟头结点</pre></td></tr><tr><td data-num="6"></td><td><pre>      ListNode dummy2 = new ListNode(-1);</pre></td></tr><tr><td data-num="7"></td><td><pre>      // p1, p2 指针负责生成结果链表</pre></td></tr><tr><td data-num="8"></td><td><pre>      ListNode p1 = dummy1, p2 = dummy2;</pre></td></tr><tr><td data-num="9"></td><td><pre>      // p 负责遍历原链表，类似合并两个有序链表的逻辑</pre></td></tr><tr><td data-num="10"></td><td><pre>      // 这里是将一个链表分解成两个链表</pre></td></tr><tr><td data-num="11"></td><td><pre>      ListNode p = head;</pre></td></tr><tr><td data-num="12"></td><td><pre>      while (p != null) {</pre></td></tr><tr><td data-num="13"></td><td><pre>        if (p.val &gt;= x) {</pre></td></tr><tr><td data-num="14"></td><td><pre>          p2.next = p;</pre></td></tr><tr><td data-num="15"></td><td><pre>          p2 = p2.next;</pre></td></tr><tr><td data-num="16"></td><td><pre>        } else {</pre></td></tr><tr><td data-num="17"></td><td><pre>          p1.next = p;</pre></td></tr><tr><td data-num="18"></td><td><pre>          p1 = p1.next;</pre></td></tr><tr><td data-num="19"></td><td><pre>        }</pre></td></tr><tr><td data-num="20"></td><td><pre>        // 断开原链表中的每个节点的 next 指针</pre></td></tr><tr><td data-num="21"></td><td><pre>        ListNode temp = p.next;</pre></td></tr><tr><td data-num="22"></td><td><pre>        p.next = null;</pre></td></tr><tr><td data-num="23"></td><td><pre>        p = temp;</pre></td></tr><tr><td data-num="24"></td><td><pre>      }</pre></td></tr><tr><td data-num="25"></td><td><pre>      // 连接两个链表</pre></td></tr><tr><td data-num="26"></td><td><pre>      p1.next = dummy2.next;</pre></td></tr><tr><td data-num="27"></td><td><pre></pre></td></tr><tr><td data-num="28"></td><td><pre>      return dummy1.next;</pre></td></tr><tr><td data-num="29"></td><td><pre>    }</pre></td></tr><tr><td data-num="30"></td><td><pre>}</pre></td></tr></table><div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div></div></figure>',1),n=[p];function i(s,m){return d(),r("div",null,n)}const c=t(a,[["render",i],["__file","3758805c.html.vue"]]);export{c as default};
