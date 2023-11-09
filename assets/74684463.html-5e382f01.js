import{_ as t,o as d,c as r,e as a}from"./app-5de3c553.js";const e={},n=a('<h2 id="心累-每天都是-惊喜-我太菜了" tabindex="-1"><a class="header-anchor" href="#心累-每天都是-惊喜-我太菜了" aria-hidden="true">#</a> 心累，每天都是“惊喜”，我太菜了</h2><p>环境<br> 开发工具 idea</p><figure class="highlight bash"><figcaption data-lang="bash"></figcaption><div class="code-container"><table><tr><td data-num="1"></td><td><pre>flutter doctor</pre></td></tr><tr><td data-num="2"></td><td><pre></pre></td></tr><tr><td data-num="3"></td><td><pre>D:\\Android\\flutter\\bin\\flutter.bat doctor --verbose</pre></td></tr><tr><td data-num="4"></td><td><pre>[√] Flutter (Channel stable, v1.17.0, on Microsoft Windows [Version 10.0.18363.815], locale zh-CN)</pre></td></tr><tr><td data-num="5"></td><td><pre>    • Flutter version 1.17.0 at D:\\Android\\flutter</pre></td></tr><tr><td data-num="6"></td><td><pre>    • Framework revision e6b34c2b5c (7 days ago), 2020-05-02 11:39:18 -0700</pre></td></tr><tr><td data-num="7"></td><td><pre>    • Engine revision 540786dd51</pre></td></tr><tr><td data-num="8"></td><td><pre>    • Dart version 2.8.1</pre></td></tr><tr><td data-num="9"></td><td><pre></pre></td></tr><tr><td data-num="10"></td><td><pre>[√] Android toolchain - develop for Android devices (Android SDK version 29.0.3)</pre></td></tr><tr><td data-num="11"></td><td><pre>    • Android SDK at D:\\Android\\android-sdk</pre></td></tr><tr><td data-num="12"></td><td><pre>    • Platform android-29, build-tools 29.0.3</pre></td></tr><tr><td data-num="13"></td><td><pre>    • ANDROID_HOME = D:\\Android\\android-sdk</pre></td></tr><tr><td data-num="14"></td><td><pre>    • Java binary at: D:\\Program Files\\Java\\jdk1.8.0_241\\bin\\java</pre></td></tr><tr><td data-num="15"></td><td><pre>    • Java version Java(TM) SE Runtime Environment (build 1.8.0_241-b07)</pre></td></tr><tr><td data-num="16"></td><td><pre>    • All Android licenses accepted.</pre></td></tr><tr><td data-num="17"></td><td><pre></pre></td></tr><tr><td data-num="18"></td><td><pre>[!] Android Studio (not installed)</pre></td></tr><tr><td data-num="19"></td><td><pre>    • Android Studio not found; download from https://developer.android.com/studio/index.html</pre></td></tr><tr><td data-num="20"></td><td><pre>      (or visit https://flutter.dev/docs/get-started/install/windows#android-setup for detailed instructions).</pre></td></tr><tr><td data-num="21"></td><td><pre></pre></td></tr><tr><td data-num="22"></td><td><pre>[√] Connected device (1 available)</pre></td></tr><tr><td data-num="23"></td><td><pre>    • Android SDK built for x86 • emulator-5554 • android-x86 • Android 8.0.0 (API 26) (emulator)</pre></td></tr><tr><td data-num="24"></td><td><pre></pre></td></tr><tr><td data-num="25"></td><td><pre>! Doctor found issues in 1 category.</pre></td></tr><tr><td data-num="26"></td><td><pre>Process finished with exit code 0</pre></td></tr></table><div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div></div></figure><p><img src="https://i.loli.net/2020/05/09/IzAgor5ceEDQtC6.png" alt="Could not find androidx.lifecycle:lifecycle-common:2.2.0，lifecycle-common-java8:2.2.0，lifecycle-runtime:2.2.0，androidx.fragment:fragment:1.1.0.，androidx.annotation:annotation:1.1.0."><br> 解决方法：</p><figure class="highlight groovy"><figcaption data-lang="groovy"></figcaption><div class="code-container"><table><tr><td data-num="1"></td><td><pre>allprojects {</pre></td></tr><tr><td data-num="2"></td><td><pre>    repositories {</pre></td></tr><tr><td data-num="3"></td><td><pre>        google() </pre></td></tr><tr><td data-num="4"></td><td><pre>        jcenter()</pre></td></tr><tr><td data-num="5"></td><td><pre>        maven { url &quot;https://maven.google.com&quot; }//感觉google()是假的,这里我用了阿里云镜像，可能没同步吧。</pre></td></tr><tr><td data-num="6"></td><td><pre>    }</pre></td></tr><tr><td data-num="7"></td><td><pre>}</pre></td></tr></table><div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div></div></figure><p><img src="https://i.loli.net/2020/05/09/xOWjZLbfkpzEA5a.png" alt=".gradleachesransforms-1iles-1.1ore-1.1.0.aarb817d4a7e2a888884c999547cadccefesaluesalues.xml:7:5-70: AAPT: error: resource android:attr/fontVariationSettings not found.AAPT: error: resource android:attr/ttcIndex not found"></p><p><a href="https://stackoverflow.com/questions/49208772/error-resource-androidattr-fontvariationsettings-not-found" target="_blank" rel="noopener noreferrer">stackoverflow上解决方法</a></p><p>解决方法：<br> 修改app下的build.gradle文件</p><figure class="highlight groovy"><figcaption data-lang="groovy"></figcaption><div class="code-container"><table><tr><td data-num="1"></td><td><pre>android {</pre></td></tr><tr><td data-num="2"></td><td><pre>    compileSdkVersion 28</pre></td></tr><tr><td data-num="3"></td><td><pre>    defaultConfig {</pre></td></tr><tr><td data-num="4"></td><td><pre>	...</pre></td></tr><tr><td data-num="5"></td><td><pre>        targetSdkVersion 28</pre></td></tr><tr><td data-num="6"></td><td><pre>	...</pre></td></tr><tr><td data-num="7"></td><td><pre>    }</pre></td></tr><tr><td data-num="8"></td><td><pre>    ...</pre></td></tr><tr><td data-num="9"></td><td><pre>}</pre></td></tr></table><div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div></div></figure><p>stackoverflow真是个好东西，可惜要翻墙，感想上面的大神。<br> 不写了，累，这种资料网站都要墙，真是丧心病狂，什么时候能不用镜像站。构建工具再好，巧妇难为无米之炊啊</p>',10),i=[n];function o(s,p){return d(),r("div",null,i)}const c=t(e,[["render",o],["__file","74684463.html.vue"]]);export{c as default};
