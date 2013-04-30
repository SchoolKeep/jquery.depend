/// <reference path="../lib/jquery/jquery-1.7.2.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine.js" />
/// <reference path="../lib/jasmine-1.2.0/jasmine-html.js" />

describe('jquery.depend', function () {

    describe('"analyze" public static method �ɂ���', function () {
        var userAgent, result;

        describe('userAgent �� "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Safari �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.safari).toBeTruthy();
            });

            it('�o�[�W������ "6.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('6.0');
            });

            it('�v���b�g�t�H�[���� mobile �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Safari �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.safari).toBeTruthy();
            });

            it('�o�[�W������ "5.1" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('5.1');
            });

            it('�v���b�g�t�H�[���� mobile �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Safari �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.safari).toBeTruthy();
            });

            it('�o�[�W������ "6.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('6.0');
            });

            it('�v���b�g�t�H�[���� tablet �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.tablet).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Android�W���u���E�U �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.browser).toBeTruthy();
            });

            it('�o�[�W������ "4.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('4.0');
            });

            it('�v���b�g�t�H�[���� mobile �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Android�W���u���E�U �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.browser).toBeTruthy();
            });

            it('�o�[�W������ "4.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('4.0');
            });

            it('�v���b�g�t�H�[���� mobile �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Android�W���u���E�U �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.browser).toBeTruthy();
            });

            it('�o�[�W������ "4.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('4.0');
            });

            it('�v���b�g�t�H�[���� tablet �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.tablet).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Internet Explorer �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('�o�[�W������ "9.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('9.0');
            });

            it('�v���b�g�t�H�[���� mobile �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mobile).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Internet Explorer �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('�o�[�W������ "6.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('6.0');
            });

            it('�v���b�g�t�H�[���� windows �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Internet Explorer �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('�o�[�W������ "7.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('7.0');
            });

            it('�v���b�g�t�H�[���� windows �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Internet Explorer �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('�o�[�W������ "8.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('8.0');
            });

            it('�v���b�g�t�H�[���� windows �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Internet Explorer �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.msie).toBeTruthy();
            });

            it('�o�[�W������ "9.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('9.0');
            });

            it('�v���b�g�t�H�[���� windows �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Chrome �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.chrome).toBeTruthy();
            });

            it('�o�[�W������ "25.0.1364.172" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('25.0.1364.172');
            });

            it('�v���b�g�t�H�[���� windows �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Firefox �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.firefox).toBeTruthy();
            });

            it('�o�[�W������ "18.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('18.0');
            });

            it('�v���b�g�t�H�[���� windows �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Safari �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.safari).toBeTruthy();
            });

            it('�o�[�W������ "6.0" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('6.0');
            });

            it('�v���b�g�t�H�[���� mac �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.mac).toBeTruthy();
            });
        });

        describe('userAgent �� "Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Opera �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.opera).toBeTruthy();
            });

            it('�o�[�W������ "9.62" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('9.62');
            });

            it('�v���b�g�t�H�[���� windows �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.windows).toBeTruthy();
            });
        });

        describe('userAgent �� "Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54" �̂Ƃ�', function () {

            beforeEach(function () {
                userAgent = 'Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54';
            });

            afterEach(function () {
            });

            it('�u���E�U�� Opera �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.opera).toBeTruthy();
            });

            it('�o�[�W������ "8.54" �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.browser.version).toBe('8.54');
            });

            it('�v���b�g�t�H�[���� linux �Ɣ���', function () {
                result = g.UserAgent.analyze(userAgent);
                expect(result.platform.linux).toBeTruthy();
            });
        });
    });

});


