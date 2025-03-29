export const GitHubLogo = (props: { link: string }) => (
  <a href={props.link} target="_blank" rel="noreferrer">
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      version="1.1"
      width="32"
      height="32"
      fill="currentColor"
      data-view-component="true"
    >
      <title>GitHub icon</title>
      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
    </svg>
  </a>
);

export const GmailLogo = (props: { link: string }) => (
  <a href={props.link} target="_blank" rel="noreferrer" className="gmailLogo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    >
      <title>Gmail icon</title>
      <path d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"></path>
    </svg>
  </a>
);

export const LinkedInLogo = (props: { link: string }) => (
  <a href={props.link} target="_blank" rel="noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-271 283.9 256 235.1"
      width="32"
      height="32"
      fill="currentColor"
    >
      <title>LinkedIn icon</title>
      <rect x="-264.4" y="359.3" width="49.9" height="159.7"></rect>
      <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z"></path>
      <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z"></path>
    </svg>
  </a>
);

export const NestJsLogo = (props: { size: number }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
  >
    <title>NestJS icon</title>
    <path d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z"></path>
  </svg>
);

export const TypeScriptLogo = (props: { size: number }) => (
  <svg
    fill="none"
    viewBox="0 0 27 26"
    width={props.size + 1}
    height={props.size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Typescript Icon</title>
    <path
      clipRule="evenodd"
      d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

export const NodeJsLogo = (props: { size: number }) => (
  <svg
    height={props.size}
    viewBox="0 0 267 80"
    fill="currentColor"
    aria-label="Node.js logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>NodeJs</title>
    <mask
      id="mask0_1803_3458"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="267"
      height="80"
    >
      <path d="M267 0H0V79.3784H267V0Z" fill="white"></path>
    </mask>
    <g mask="url(#mask0_1803_3458)">
      <path
        d="M234.983 78.7547C234.292 78.7547 233.648 78.5695 233.05 78.2452L226.929 74.5871C226.008 74.0776 226.469 73.8924 226.745 73.7998C227.987 73.3829 228.217 73.2903 229.506 72.5495C229.644 72.4569 229.828 72.5033 229.966 72.5959L234.66 75.4206C234.844 75.5132 235.074 75.5132 235.212 75.4206L253.575 64.7235C253.758 64.6309 253.852 64.4457 253.852 64.2143V42.8665C253.852 42.6351 253.758 42.4499 253.575 42.3573L235.212 31.7067C235.028 31.614 234.798 31.614 234.66 31.7067L216.298 42.3573C216.114 42.4499 216.022 42.6813 216.022 42.8665V64.2143C216.022 64.3995 216.114 64.6309 216.298 64.7235L221.314 67.641C224.029 69.0301 225.732 67.4094 225.732 65.7886V44.7189C225.732 44.4411 225.962 44.1633 226.285 44.1633H228.632C228.908 44.1633 229.184 44.3947 229.184 44.7189V65.7886C229.184 69.447 227.205 71.577 223.753 71.577C222.695 71.577 221.867 71.577 219.519 70.4195L214.687 67.641C213.491 66.9463 212.754 65.6498 212.754 64.2604V42.913C212.754 41.5236 213.491 40.2271 214.687 39.5324L233.05 28.8356C234.2 28.1873 235.765 28.1873 236.915 28.8356L255.278 39.5324C256.474 40.2271 257.21 41.5236 257.21 42.913V64.2604C257.21 65.6498 256.474 66.9463 255.278 67.641L236.915 78.3378C236.363 78.5695 235.673 78.7547 234.983 78.7547Z"
        fill="#5FA04E"
      ></path>
      <path
        d="M240.69 64.075C232.635 64.075 230.978 60.3704 230.978 57.2215C230.978 56.9437 231.208 56.6658 231.53 56.6658H233.923C234.2 56.6658 234.43 56.8511 234.43 57.1289C234.798 59.5831 235.856 60.7873 240.735 60.7873C244.601 60.7873 246.258 59.9074 246.258 57.8236C246.258 56.6197 245.796 55.7398 239.768 55.1377C234.752 54.6282 231.622 53.5169 231.622 49.4881C231.622 45.7374 234.752 43.5145 239.998 43.5145C245.89 43.5145 248.789 45.5521 249.157 49.9976C249.157 50.1366 249.111 50.2754 249.02 50.4144C248.926 50.507 248.789 50.5997 248.649 50.5997H246.21C245.982 50.5997 245.751 50.4144 245.705 50.1828C245.152 47.6359 243.725 46.8025 239.952 46.8025C235.718 46.8025 235.212 48.2842 235.212 49.3955C235.212 50.7384 235.81 51.1553 241.517 51.8962C247.177 52.637 249.847 53.7021 249.847 57.6845C249.847 61.7595 246.487 64.075 240.69 64.075Z"
        fill="#5FA04E"
      ></path>
      <path
        d="M267.2 41.6621C267.2 43.6071 265.588 45.2279 263.654 45.2279C261.722 45.2279 260.111 43.6533 260.111 41.6621C260.111 39.6247 261.768 38.0966 263.654 38.0966C265.542 38.0966 267.2 39.6709 267.2 41.6621ZM260.664 41.6621C260.664 43.3293 261.999 44.6722 263.608 44.6722C265.266 44.6722 266.601 43.2829 266.601 41.6621C266.601 39.9951 265.266 38.6986 263.608 38.6986C262.045 38.6986 260.664 39.9951 260.664 41.6621ZM262.321 39.6709H263.702C264.162 39.6709 265.083 39.6709 265.083 40.736C265.083 41.4769 264.621 41.6159 264.344 41.7085C264.898 41.7547 264.943 42.1254 264.989 42.6346C265.035 42.9588 265.083 43.5145 265.174 43.6997H264.344C264.344 43.5145 264.207 42.4958 264.207 42.4494C264.162 42.218 264.07 42.1254 263.794 42.1254H263.103V43.7459H262.321V39.6709ZM263.057 41.4307H263.654C264.162 41.4307 264.253 41.0603 264.253 40.875C264.253 40.3194 263.885 40.3194 263.654 40.3194H263.012V41.4307H263.057Z"
        fill="#5FA04E"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.6737 41.9539C43.6737 41.1204 43.2136 40.3334 42.4773 39.9165L23.0104 28.5712C22.6883 28.386 22.3201 28.2934 21.9519 28.2472C21.9059 28.2472 21.7679 28.2472 21.7679 28.2472C21.3997 28.2472 21.0315 28.386 20.7094 28.5712L1.19654 39.8701C0.460209 40.287 0 41.0743 0 41.9539L0.0460209 72.3315C0.0460209 72.7484 0.276126 73.165 0.644293 73.3502C1.01246 73.5819 1.47267 73.5819 1.79482 73.3502L13.3921 66.682C14.1284 66.2653 14.5886 65.4781 14.5886 64.6446V50.4282C14.5886 49.5947 15.0488 48.8074 15.7852 48.3908L20.7094 45.5197C21.0776 45.288 21.4917 45.1954 21.9059 45.1954C22.3201 45.1954 22.7343 45.288 23.0565 45.5197L27.9806 48.3908C28.7169 48.8074 29.1773 49.5947 29.1773 50.4282V64.6446C29.1773 65.4781 29.6375 66.2653 30.3738 66.682L41.8791 73.3502C42.2471 73.5819 42.7073 73.5819 43.0755 73.3502C43.4438 73.165 43.6737 72.7484 43.6737 72.3315V41.9539Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M137.465 0.138922C137.096 -0.0463072 136.636 -0.0463072 136.314 0.138922C135.946 0.370456 135.716 0.740915 135.716 1.15768V31.2573C135.716 31.5351 135.578 31.8129 135.301 31.9984C135.025 32.1372 134.749 32.1372 134.473 31.9984L129.595 29.1735C128.859 28.7569 127.984 28.7569 127.248 29.1735L107.735 40.5188C106.999 40.9357 106.539 41.7227 106.539 42.5562V65.2004C106.539 66.0342 106.999 66.8212 107.735 67.2381L127.248 78.5834C127.984 79 128.859 79 129.595 78.5834L149.108 67.2381C149.844 66.8212 150.304 66.0342 150.304 65.2004V8.75207C150.304 7.87222 149.844 7.085 149.108 6.66824L137.465 0.138922ZM135.67 57.7451C135.67 57.9765 135.578 58.1617 135.394 58.2544L128.72 62.1444C128.536 62.237 128.306 62.237 128.122 62.1444L121.449 58.2544C121.265 58.1617 121.173 57.9303 121.173 57.7451V49.9656C121.173 49.7339 121.265 49.5487 121.449 49.4561L128.122 45.5663C128.306 45.4737 128.536 45.4737 128.72 45.5663L135.394 49.4561C135.578 49.5487 135.67 49.7803 135.67 49.9656V57.7451Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M202.398 49.7801C203.135 49.3632 203.549 48.5762 203.549 47.7425V42.2319C203.549 41.3985 203.089 40.6112 202.398 40.1946L183.023 28.8957C182.287 28.4788 181.413 28.4788 180.676 28.8957L161.164 40.2407C160.427 40.6576 159.967 41.4449 159.967 42.2784V64.9226C159.967 65.7561 160.427 66.5434 161.164 66.96L180.538 78.0737C181.275 78.4905 182.149 78.4905 182.839 78.0737L194.575 71.4983C194.943 71.3131 195.173 70.8962 195.173 70.4793C195.173 70.0627 194.943 69.6459 194.575 69.4606L174.97 58.1153C174.602 57.8839 174.372 57.5135 174.372 57.0966V50.0117C174.372 49.5949 174.602 49.178 174.97 48.9928L181.091 45.4735C181.459 45.2421 181.919 45.2421 182.287 45.4735L188.408 48.9928C188.776 49.2245 189.006 49.5949 189.006 50.0117V55.5685C189.006 55.9853 189.236 56.4019 189.605 56.5872C189.973 56.8188 190.433 56.8188 190.801 56.5872L202.398 49.7801Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M181.551 48.7155C181.689 48.6228 181.874 48.6228 182.012 48.7155L185.739 50.8919C185.877 50.9845 185.969 51.1235 185.969 51.3087V55.6615C185.969 55.8468 185.877 55.9858 185.739 56.0784L182.012 58.2548C181.874 58.3474 181.689 58.3474 181.551 58.2548L177.824 56.0784C177.686 55.9858 177.594 55.8468 177.594 55.6615V51.3087C177.594 51.1235 177.686 50.9845 177.824 50.8919L181.551 48.7155Z"
        fill="#5FA04E"
      ></path>
      <path
        d="M76.3012 28.9882C75.5647 28.5716 74.6903 28.5716 73.954 28.9882L54.5792 40.241C53.8429 40.6578 53.4287 41.4449 53.4287 42.2786V64.83C53.4287 65.6637 53.8889 66.4507 54.5792 66.8676L73.954 78.1203C74.6903 78.5369 75.5647 78.5369 76.3012 78.1203L95.6758 66.8676C96.4123 66.4507 96.8263 65.6637 96.8263 64.83V42.2786C96.8263 41.4449 96.3662 40.6578 95.6758 40.241L76.3012 28.9882Z"
        fill="url(#paint0_linear_1803_3458)"
      ></path>
      <path
        d="M95.7221 40.241L76.2554 28.9882C76.0714 28.8956 75.8412 28.803 75.6572 28.7568L53.8433 66.3119C54.0273 66.5433 54.2575 66.7286 54.4874 66.8676L73.9544 78.1203C74.5067 78.4443 75.1508 78.5369 75.749 78.3517L96.2284 40.6578C96.0904 40.4726 95.9063 40.3336 95.7221 40.241Z"
        fill="url(#paint1_linear_1803_3458)"
      ></path>
      <path
        d="M95.7224 66.8669C96.2747 66.5427 96.6889 65.9871 96.8729 65.385L75.5651 28.7098C75.013 28.6172 74.4146 28.6633 73.9085 28.9876L54.5796 40.1939L75.427 78.4437C75.7031 78.3973 76.0255 78.3046 76.3016 78.1659L95.7224 66.8669Z"
        fill="url(#paint2_linear_1803_3458)"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1803_3458"
        x1="83.0183"
        y1="37.3689"
        x2="65.3246"
        y2="73.2407"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3F873F"></stop>
        <stop offset="0.3296" stopColor="#3F8B3D"></stop>
        <stop offset="0.6367" stopColor="#3E9638"></stop>
        <stop offset="0.9341" stopColor="#3DA92E"></stop>
        <stop offset="1" stopColor="#3DAE2B"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_1803_3458"
        x1="72.1833"
        y1="56.1876"
        x2="121.552"
        y2="19.937"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.1376" stopColor="#3F873F"></stop>
        <stop offset="0.4016" stopColor="#52A044"></stop>
        <stop offset="0.7129" stopColor="#64B749"></stop>
        <stop offset="0.9081" stopColor="#6ABF4B"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_1803_3458"
        x1="52.7188"
        y1="53.5463"
        x2="97.551"
        y2="53.5463"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0919165" stopColor="#6ABF4B"></stop>
        <stop offset="0.2871" stopColor="#64B749"></stop>
        <stop offset="0.5984" stopColor="#52A044"></stop>
        <stop offset="0.8624" stopColor="#3F873F"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const PythonLogo = (props: { size: number }) => (
  <svg
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    height={props.size}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title>Python Icon</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        {" "}
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-340.000000, -7599.000000)"
          fill="currentColor"
        >
          {" "}
          <g id="icons" transform="translate(56.000000, 160.000000)">
            {" "}
            <path
              d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439"
              id="python-[#127]"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

export const GraphqlLogo = (props: { size: number }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    height={props.size}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier" fill="currentColor">
      <title>GraphQl</title>
      <rect
        x="-0.43"
        y="12.534"
        width="22.901"
        height="1.187"
        transform="translate(-5.858 16.107) rotate(-59.999)"
      ></rect>
      <rect x="4.545" y="21.162" width="22.902" height="1.187"></rect>
      <rect
        x="10.43"
        y="18.008"
        width="1.187"
        height="13.227"
        transform="translate(-15.812 21.857) rotate(-59.999)"
      ></rect>
      <rect
        x="20.381"
        y="0.771"
        width="1.187"
        height="13.227"
        transform="translate(4.092 21.856) rotate(-59.999)"
      ></rect>
      <rect
        x="4.412"
        y="6.787"
        width="13.227"
        height="1.187"
        transform="translate(-2.213 6.502) rotate(-30.001)"
      ></rect>
      <rect
        x="20.389"
        y="1.677"
        width="1.187"
        height="22.901"
        transform="translate(-3.753 12.25) rotate(-30.001)"
      ></rect>
      <rect x="5.454" y="9.386" width="1.187" height="13.228"></rect>
      <rect x="25.36" y="9.386" width="1.187" height="13.228"></rect>
      <rect
        x="15.222"
        y="24.097"
        width="11.504"
        height="1.037"
        transform="translate(-9.498 13.785) rotate(-30.001)"
      ></rect>
      <path d="M28.12,23a2.5,2.5,0,1,1-.915-3.411A2.5,2.5,0,0,1,28.12,23"></path>
      <path d="M8.2,11.5a2.5,2.5,0,1,1-.915-3.411A2.5,2.5,0,0,1,8.2,11.5"></path>
      <path d="M3.88,23a2.5,2.5,0,1,1,3.411.915A2.5,2.5,0,0,1,3.88,23"></path>
      <path d="M23.8,11.5a2.5,2.5,0,1,1,3.411.915A2.5,2.5,0,0,1,23.8,11.5"></path>
      <path d="M16,30a2.5,2.5,0,1,1,2.5-2.5A2.493,2.493,0,0,1,16,30"></path>
      <path d="M16,6.991a2.5,2.5,0,1,1,2.5-2.5,2.493,2.493,0,0,1-2.5,2.5"></path>
    </g>
  </svg>
);

export const GearLogo = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 56 56"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="0"
  >
    <path d="M 28.0000 50.8281 C 28.6094 50.8281 29.1719 50.7578 29.8047 50.7110 L 31.1641 53.2891 C 31.4219 53.8047 31.9375 54.0859 32.5704 53.9922 C 33.1563 53.8750 33.5782 53.4532 33.6485 52.8203 L 34.0704 49.9844 C 35.2188 49.6797 36.3672 49.2344 37.4922 48.7422 L 39.6016 50.6406 C 40.0469 51.0625 40.6094 51.1563 41.1953 50.8281 C 41.7110 50.5469 41.9219 49.9844 41.8047 49.3750 L 41.2188 46.5625 C 42.1797 45.8828 43.1407 45.1094 44.0078 44.2422 L 46.6328 45.3438 C 47.2189 45.5781 47.7579 45.4610 48.2034 44.9219 C 48.6018 44.5000 48.6483 43.8906 48.3205 43.3750 L 46.7970 40.9375 C 47.5002 39.9532 48.0627 38.8984 48.6018 37.7735 L 51.4611 37.9141 C 52.0703 37.9375 52.5858 37.6094 52.7970 37.0235 C 52.9842 36.4375 52.7970 35.8750 52.3045 35.5 L 50.0783 33.7188 C 50.3831 32.5937 50.6173 31.3750 50.7109 30.1094 L 53.4296 29.2657 C 54.0157 29.0547 54.3906 28.6094 54.3906 27.9766 C 54.3906 27.3672 54.0157 26.9219 53.4296 26.7110 L 50.7109 25.8437 C 50.6173 24.5781 50.3831 23.4063 50.0783 22.2578 L 52.3045 20.4532 C 52.7970 20.1016 52.9842 19.5625 52.7970 18.9766 C 52.5858 18.3906 52.0703 18.0625 51.4611 18.0859 L 48.6018 18.2032 C 48.0627 17.0781 47.5002 16.0235 46.7970 15.0391 L 48.3205 12.6016 C 48.6483 12.1094 48.6018 11.5000 48.2034 11.0781 C 47.7579 10.5391 47.2189 10.3984 46.6328 10.6563 L 44.0078 11.7110 C 43.1407 10.8906 42.1797 10.0937 41.2188 9.4141 L 41.8047 6.6250 C 41.9219 5.9922 41.7110 5.4297 41.1953 5.1484 C 40.6094 4.8437 40.0469 4.8906 39.6016 5.3594 L 37.4922 7.2110 C 36.3672 6.7188 35.2188 6.3203 34.0704 5.9922 L 33.6485 3.1563 C 33.5782 2.5469 33.1563 2.1016 32.5704 2.0078 C 31.9375 1.9141 31.4219 2.1719 31.1641 2.6875 L 29.8047 5.2657 C 29.1719 5.2188 28.6094 5.1719 28.0000 5.1719 C 27.3672 5.1719 26.8047 5.2188 26.1485 5.2657 L 24.8126 2.6875 C 24.5547 2.1719 24.0391 1.9141 23.3829 2.0078 C 22.7969 2.1016 22.3985 2.5469 22.3047 3.1563 L 21.9063 5.9688 C 20.7344 6.3203 19.5860 6.7188 18.4844 7.2110 L 16.3751 5.3594 C 15.9063 4.8906 15.3438 4.8437 14.7813 5.1484 C 14.2657 5.4297 14.0547 5.9922 14.1719 6.6250 L 14.7578 9.4141 C 13.7735 10.0937 12.8126 10.8906 11.9453 11.7110 L 9.3438 10.6563 C 8.7578 10.3984 8.1953 10.5391 7.7500 11.0781 C 7.3751 11.5000 7.3282 12.1094 7.6329 12.5781 L 9.1797 15.0391 C 8.4766 16.0235 7.9141 17.0781 7.3751 18.2032 L 4.4922 18.0859 C 3.8829 18.0625 3.3672 18.3906 3.1797 18.9766 C 2.9922 19.5625 3.1563 20.1016 3.6485 20.4532 L 5.8985 22.2578 C 5.5938 23.4063 5.3360 24.5781 5.2657 25.8437 L 2.5469 26.7110 C 1.9375 26.8984 1.6094 27.3437 1.6094 27.9766 C 1.6094 28.6094 1.9375 29.0547 2.5469 29.2657 L 5.2657 30.1328 C 5.3360 31.3750 5.5938 32.5937 5.8985 33.7188 L 3.6485 35.5 C 3.1563 35.8750 2.9922 36.4375 3.1797 37.0235 C 3.3672 37.6094 3.8829 37.9375 4.4922 37.9141 L 7.3751 37.7735 C 7.9141 38.8984 8.4766 39.9532 9.1563 40.9375 L 7.6563 43.3750 C 7.3047 43.8906 7.3516 44.5000 7.7500 44.9219 C 8.1953 45.4610 8.7578 45.5781 9.3438 45.3438 L 11.9453 44.2422 C 12.8126 45.1094 13.7735 45.8828 14.7578 46.5625 L 14.1719 49.3750 C 14.0547 49.9844 14.2657 50.5469 14.7813 50.8281 C 15.3672 51.1563 15.9297 51.0625 16.3751 50.6406 L 18.4610 48.7422 C 19.5860 49.2344 20.7344 49.6797 21.9063 49.9844 L 22.3047 52.8203 C 22.3985 53.4532 22.7969 53.8750 23.3829 53.9922 C 24.0391 54.0859 24.5547 53.8047 24.8126 53.2891 L 26.1485 50.7110 C 26.7813 50.7578 27.3672 50.8281 28.0000 50.8281 Z M 33.8829 26.5000 C 32.7813 23.5469 30.6251 21.9297 27.9297 21.9297 C 27.5313 21.9297 27.0626 21.9766 26.3126 22.1406 L 19.5860 10.6563 C 22.0938 9.4141 24.9531 8.7344 28.0000 8.7344 C 38.2188 8.7344 46.2344 16.4922 46.9611 26.5000 Z M 8.9688 28.0000 C 8.9688 21.4844 12.0391 15.7422 16.8907 12.2735 L 23.6641 23.8281 C 22.3985 25.1406 21.8126 26.5703 21.8126 28.0937 C 21.8126 29.5703 22.3751 30.9297 23.6641 32.2891 L 16.7266 43.6328 C 11.9922 40.1406 8.9688 34.4688 8.9688 28.0000 Z M 25.1172 28.0703 C 25.1172 26.4766 26.4766 25.2344 27.9766 25.2344 C 29.5704 25.2344 30.8829 26.4766 30.8829 28.0703 C 30.8829 29.6406 29.5704 30.9297 27.9766 30.9297 C 26.4766 30.9297 25.1172 29.6406 25.1172 28.0703 Z M 28.0000 47.2656 C 24.8829 47.2656 21.9766 46.5391 19.4219 45.2735 L 26.3126 34 C 27.0391 34.1875 27.5313 34.2344 27.9297 34.2344 C 30.6485 34.2344 32.8047 32.5703 33.8829 29.5469 L 46.9611 29.5469 C 46.2109 39.5078 38.1953 47.2656 28.0000 47.2656 Z"></path>
  </svg>
);

