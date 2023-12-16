




CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Должность VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаписьВремя (
 primaryKey UUID NOT NULL,
 Время VARCHAR(255) NULL,
 Статус VARCHAR(8) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Услуга (
 primaryKey UUID NOT NULL,
 ДатаУслуги TIMESTAMP(3) NULL,
 Прайс UUID NOT NULL,
 ЗаписьВремя UUID NOT NULL,
 ЗаписьКлиента UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Трудозатраты (
 primaryKey UUID NOT NULL,
 ДатаОтчета TIMESTAMP(3) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Прайс (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 Цена DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Материал (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 Марка VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаписьКлиента (
 primaryKey UUID NOT NULL,
 ДатаЗаписи TIMESTAMP(3) NULL,
 ФамилияИмя VARCHAR(255) NULL,
 Телефон VARCHAR(255) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РасходМатериала (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Материал UUID NOT NULL,
 Трудозатраты UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ЗаписьВремя ADD CONSTRAINT FK5535c61fe93546fce751d78d61f20ccb433c42cf FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index5535c61fe93546fce751d78d61f20ccb433c42cf on ЗаписьВремя (Сотрудники); 

 ALTER TABLE Услуга ADD CONSTRAINT FK9b16fed5c3c04c081cf2020b61b4cf861eb87fa0 FOREIGN KEY (Прайс) REFERENCES Прайс; 
CREATE INDEX Index9b16fed5c3c04c081cf2020b61b4cf861eb87fa0 on Услуга (Прайс); 

 ALTER TABLE Услуга ADD CONSTRAINT FK46a9ec31363ebd942c0e74b10d66a14b587dc473 FOREIGN KEY (ЗаписьВремя) REFERENCES ЗаписьВремя; 
CREATE INDEX Index46a9ec31363ebd942c0e74b10d66a14b587dc473 on Услуга (ЗаписьВремя); 

 ALTER TABLE Услуга ADD CONSTRAINT FKc15e7eb884a04525529651dd5a81108ce81752f1 FOREIGN KEY (ЗаписьКлиента) REFERENCES ЗаписьКлиента; 
CREATE INDEX Indexc15e7eb884a04525529651dd5a81108ce81752f1 on Услуга (ЗаписьКлиента); 

 ALTER TABLE Трудозатраты ADD CONSTRAINT FK958cbce0c45eab48693a511ff582a7fedbe71f92 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index958cbce0c45eab48693a511ff582a7fedbe71f92 on Трудозатраты (Сотрудники); 

 ALTER TABLE ЗаписьКлиента ADD CONSTRAINT FKf54beca0c4af4bf795c78f139a3fad4ab853a6ef FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexf54beca0c4af4bf795c78f139a3fad4ab853a6ef on ЗаписьКлиента (Сотрудники); 

 ALTER TABLE РасходМатериала ADD CONSTRAINT FK55f7ba6ef88d479fb4f0c02bea384f064bcedfec FOREIGN KEY (Материал) REFERENCES Материал; 
CREATE INDEX Index55f7ba6ef88d479fb4f0c02bea384f064bcedfec on РасходМатериала (Материал); 

 ALTER TABLE РасходМатериала ADD CONSTRAINT FK13a8b1000acd6791a922cbce64a5eebddfd44a49 FOREIGN KEY (Трудозатраты) REFERENCES Трудозатраты; 
CREATE INDEX Index13a8b1000acd6791a922cbce64a5eebddfd44a49 on РасходМатериала (Трудозатраты); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

