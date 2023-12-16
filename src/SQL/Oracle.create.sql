



CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Должность" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаписьВремя"
(

	"primaryKey" RAW(16) NOT NULL,

	"Время" NVARCHAR2(255) NULL,

	"Статус" NVARCHAR2(8) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Услуга"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаУслуги" DATE NULL,

	"Прайс" RAW(16) NOT NULL,

	"ЗаписьВремя" RAW(16) NOT NULL,

	"ЗаписьКлиента" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Трудозатраты"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОтчета" DATE NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Прайс"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Цена" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Материал"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Марка" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаписьКлиента"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаЗаписи" DATE NULL,

	"ФамилияИмя" NVARCHAR2(255) NULL,

	"Телефон" NVARCHAR2(255) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РасходМатериала"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Материал" RAW(16) NOT NULL,

	"Трудозатраты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ЗаписьВремя"
	ADD CONSTRAINT "ЗаписьВремя_F_9367" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ЗаписьВремя_I_1098" on "ЗаписьВремя" ("Сотрудники");

ALTER TABLE "Услуга"
	ADD CONSTRAINT "Услуга_FПрайс_0" FOREIGN KEY ("Прайс") REFERENCES "Прайс" ("primaryKey");

CREATE INDEX "Услуга_IПрайс" on "Услуга" ("Прайс");

ALTER TABLE "Услуга"
	ADD CONSTRAINT "Услуга_FЗапис_5624" FOREIGN KEY ("ЗаписьВремя") REFERENCES "ЗаписьВремя" ("primaryKey");

CREATE INDEX "Услуга_IЗапис_9487" on "Услуга" ("ЗаписьВремя");

ALTER TABLE "Услуга"
	ADD CONSTRAINT "Услуга_FЗапис_6048" FOREIGN KEY ("ЗаписьКлиента") REFERENCES "ЗаписьКлиента" ("primaryKey");

CREATE INDEX "Услуга_IЗапис_4157" on "Услуга" ("ЗаписьКлиента");

ALTER TABLE "Трудозатраты"
	ADD CONSTRAINT "Трудозатраты_F_609" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "Трудозатраты__3158" on "Трудозатраты" ("Сотрудники");

ALTER TABLE "ЗаписьКлиента"
	ADD CONSTRAINT "ЗаписьКлиент_1741" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ЗаписьКлиент_3671" on "ЗаписьКлиента" ("Сотрудники");

ALTER TABLE "РасходМатериала"
	ADD CONSTRAINT "РасходМатери_3127" FOREIGN KEY ("Материал") REFERENCES "Материал" ("primaryKey");

CREATE INDEX "РасходМатериа_545" on "РасходМатериала" ("Материал");

ALTER TABLE "РасходМатериала"
	ADD CONSTRAINT "РасходМатери_1322" FOREIGN KEY ("Трудозатраты") REFERENCES "Трудозатраты" ("primaryKey");

CREATE INDEX "РасходМатери_5537" on "РасходМатериала" ("Трудозатраты");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


