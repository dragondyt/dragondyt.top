import{_ as p,o as C,c as B,e as A}from"./app-5de3c553.js";const l={},D=A('<h2 id="第三章-数据链路层" tabindex="-1"><a class="header-anchor" href="#第三章-数据链路层" aria-hidden="true">#</a> 第三章 数据链路层</h2><p>一、选择题</p><ol><li>流量控制是为( C )所需要的。</li></ol><p>A. 位错误 　　B. 发送方缓冲区溢出<br> 　　C. 接收方缓冲区溢出 　　D. 接收方与发送方之间冲突</p><ol start="2"><li>在下列协议中，使用带位填充的首尾标志法组帧是（ B ）。</li></ol><p>A. DDCMP 　　B. HDLC 　　C. BSC 　　D. SLIP</p><ol start="3"><li>PPP不同于HDLC协议，使用面向（ B ）的填充方式。</li></ol><p>A. 比特 　　B. 字符 　　C. 透明传输 　　D. 帧</p><ol start="4"><li>对于窗口大小为n的滑动窗口，最多可以有( C )帧已发送但没有确认。</li></ol><p>A. 0 　　B. n-1 　　C. n 　　D. n+1</p><ol start="5"><li>在滑动窗口流量控制(窗口大小为8)中，ACK3意味着接收方期待的下一帧是( B )号帧。</li></ol><p>A. 2 　　B. 3 　　C. 4 　　D. 8</p><ol start="6"><li>PPP是Internet中使用的（ C ），其功能对应于OSI参考模型的数据链路层。</li></ol><p>A. 传输协议 　　B. 分组控制协议 　　C. 点到点协议 　　D. 报文控制协议</p><p>7． 下面不是数据链路层功能的是（D）。</p><p>A. 帧同步 　　B. 差错控制 　　C. 流量控制 　　D. 拥塞控制</p><p>8． 面向比特同步的帧数据段中出现位串01111101，则比特填充后输出是（A）。</p><p>A. 011111001 　　B. 001111101 　　C. 011111101 　　D. 011111010</p><p>9． PPP为实现透明传输在异步传输时采用（A），而同步传输采用（A）。</p><p>A. 字符填充法，比特填充法 　　B. 比特填充法，字符填充法<br> 　　C. 字符填充法，字节记数法 　　D. 比特填充法，比特填充法</p><p>10． 在数据通信中，当发送数据出现差错时，发送端无需进行数据重发的差错控制方法为（B）。</p><p>A. ARQ 　　B. FEC 　　C. 奇偶校验码 　　D. CRC</p><p>11． 已知循环冗余码生成多项式G(X)=x5+x4+x+1，若信息位10101100，则冗余码是（B）。</p><p>A. 01101 　　B.01100 　　C. 1101 　　D. 1100</p><p>12． 在数字通信中广泛采用CRC循环冗余码的原因是CRC可以（C）。</p><p>A. 检测出一位差错 　　　 　　B. 检测并纠正一位差错<br> 　　C. 检测出多位突发性差错 　　D. 检测并纠正多位突发性差错</p><ol start="13"><li>若数据链路的发送窗口尺寸WT=4，在发送3号帧、并接到2号帧的确认帧后，发送方还可连续发送（B）。</li></ol><p>A. 2帧 　　B. 3帧 　　C. 4帧 　　D. 1帧</p><p>14． 在回退N协议中，当帧序号为3比特，发送窗口的最大尺寸为（C）。</p><p>A. 5 　　B. 6 　　C. 7 　　D. 8</p><p>15． 在选择重传协议中，当帧的序号字段为3比特，且接受窗口与发送窗口尺寸相同时，发送窗口的最大尺寸为（B）。</p><p>A. 2 　　B. 4 　　C. 6 　　D. 8<br> 16． 假定我们运行发送窗口大小为5和接收窗口大小为3的滑动窗口算法，并且在传输过程中不会发生分组失序的问题，帧序号的编码至少有（B）位。</p><p>A. 2 　　B. 3 　　C. 4 　　D. 5</p><p>17.无论是SLIP还是PPP协议都是（D）协议。</p><p>A.物理层 B 传输层 C网络层 D数据链路层</p><p>18．下列哪一项最好地描述了CRC的特征？(AB)<br> 　　A.逐个检查每一个字符</p><p>B.能检查出99%以上的差错</p><p>C.检查不出有偶数个位出错的差错</p><p>D.不如奇偶校验方法可靠</p><p>19.HDLC协议采用的帧同步方法是（A）。</p><p>A.使用比特填充的首尾标志法</p><p>B.使用字符填充的首尾定界符法</p><p>C.字节计数法</p><p>D.违法编码法</p><p>20.流量控制是数据链路层的基本功能之一，有关流量控制，下列说法中正确的是（C）。</p><p>A.只有数据链路层存在流量控制</p><p>B.不只是数据链路层存在流量控制，不过各层的流量控制对象都一样</p><p>C.不只是数据链路层存在流量控制，但是各层的流量控制对象都不一样</p><p>D.以上都不对</p><p>21.为了避免传输中帧的消失，数据链路层采用了（D）方法。</p><p>A.发送帧编上序号 　　B.循环冗余码<br> 　　C.海明码 　　D.计时器超时重发</p><p>22.下列不属于数据链路层功能的是（B）。</p><p>A.帧同步功能 　　B.电路管理功能<br> 　　C.差错控制功能 　　D.流量控制功能</p><p>23.流量控制实际上是对（A）的控制。</p><p>A.发送方数据流量 　　B.接收方数据流量<br> 　　C.发送，接受双方数据流量 　　D.链路上任意两结点间的数据流量</p><p>24.在数据帧中，当所传送的数据中出现控制字符时，就必须采取适当的措施，使接收方不至于将数据误认为是控制信息。这样才能保证数据链路层的传输是（A）的。</p><p>A.透明 　　B.面向连接 　　C.冗余 　　D.无连接<br> 25.数据链路层采用后退N帧协议，发送方已经发送了编号为0~7的帧。</p><p>当及时器超时，若发送方只收到0，2,3号帧的确认，则要发送方重发的帧数是（C）<br> 　　A.2 　　B.3 　　C.4 　　D.5</p><p>26.计算机网络中各节点间采用©方式。</p><p>A.连续传输 　　B.总线传输 　　C.串行传输 　　D.并行传输</p><p>27.差错控制的基本方式有（多选）(AB)</p><p>A.检错反馈重发 　　B.前向纠错方式 　　C.奇偶校验码 　　D.方阵检验码</p><p>28.数据传输中的差错主要有（多选）(AD)</p><p>A.随机错 　　B.计算错 　　C.校验错 　　D.突发错</p><p>29.无论是SLIP还是PPP协议都是( B )协议。</p><p>(A)物理层　　(B)数据链路层　　©网络层　　(D)运输层</p><p>ps：不保证完全正确，仅用来偷懒</p>',67),t=[D];function e(r,o){return C(),B("div",null,t)}const a=p(l,[["render",e],["__file","589e13eb.html.vue"]]);export{a as default};
