'use strict';const _0x5cfe=['ritual','35764usWriJ','SOURCE_TYP_BREW','school','val','sourceShort','_actor','_page','1273783NYUsMF','technomagic','Time','doAbsorbItems','level','btn-run-mods','_content','_normalisedTime','spLevelToFull','_dataList','[name=\x22sel-preparation-mode\x22]','_l_time','titleSearch','concentration','22371OdVEza','Name','sourceJsonToFull','spSchoolAndSubschoolsAbvsShort','School','_pImportEntry_pImportToActor','_list','0-3','absorbFnBindListeners','\x20(tec.)','_pFnPostProcessEntries','getListDisplayLevel','SOURCE_TYP_ARCANA','_isConc','URL_TO_HASH_BUILDER','Source','SOURCE_TYP_OFFICIAL_ALL','dndz-spells','find','_resolve','spSchoolAbvToFull','292908FiBjVO','name','getData','foundryData','range','render','[name=\x22sel-is-prepared\x22]','meta','Set\x20Preparation\x20Details','_titleButtonRun','schoolLong','sourceJsonToColor','SOURCE_TYP_OFFICIAL_SINGLE','SOURCE_TYP_CUSTOM','spell','Import\x20and\x20Set\x20Preparation\x20Details','getFolderPathMeta','4XyxqoA','MODULE_LOCATION','activateListeners','getSpellUrl','Level','DataSourceUrl','Upload\x20File','isStreamerMode','map','entries','433572mExezc','Range','Spells','_isUseMods','.search','click','_activateListeners_absorbListItems','_l_school','sp__school-','constructor','\x22\x20(from\x20\x22','sortSpells','/template/ImportListSpellDetailPreparation.handlebars','DataSourceSpecial','Custom\x20URL','absorbFnGetData','[name=\x22btn-reset\x22]','source','DetailPreparation','[data-name=\x22wrp-btns-sort\x22]','subschools','sourceLong','[name=\x22btn-run\x22]','pGetSpellItem','dndz','TASK_EXIT_COMPLETE','Spell\x20Points','\x20Spell\x20Points','time','sheet','items','copy','Item','Importing\x20spell\x20\x22','\x20(rit.)','getActorSpellItemOpts','_titleSearch','preparation.mode','ele','close','pGetSpellIndex','preparation.prepared','OwnedItem','840819gZRGnJ','_pImportEntry_pImportToDirectoryGeneric','_isPreviewable','pGetAllSpells','get','_$btnReset','.veapp__list','text-right','sourceJsonToAbv','pGetSources','reset','text-center','getTblTimeStr','Concentration','682176DuXAHs','isTemp','pImportEntry','_pageFilter','_pImportEntry_pImportToDirectoryGeneric_pGetImportableData','initBtnSortHandlers','log'];const _0xda3b=function(_0x1ba874,_0x82cfab){_0x1ba874=_0x1ba874-0x157;let _0x5cfe68=_0x5cfe[_0x1ba874];return _0x5cfe68;};const _0x244fa1=_0xda3b;(function(_0x3f48e1,_0x49940a){const _0x2de856=_0xda3b;while(!![]){try{const _0xfde71=-parseInt(_0x2de856(0x165))+parseInt(_0x2de856(0x182))+parseInt(_0x2de856(0x173))+parseInt(_0x2de856(0x1a5))+parseInt(_0x2de856(0x190))+-parseInt(_0x2de856(0x1b6))*parseInt(_0x2de856(0x17b))+-parseInt(_0x2de856(0x1c0));if(_0xfde71===_0x49940a)break;else _0x3f48e1['push'](_0x3f48e1['shift']());}catch(_0x1d870e){_0x3f48e1['push'](_0x3f48e1['shift']());}}}(_0x5cfe,0xd071f));import{ImportList}from'./ImportList.js';import{Vetools}from'./Vetools.js';import{LGT,Util}from'./Util.js';import{UtilActors}from'./UtilActors.js';import{Config}from'./Config.js';import{UtilList2}from'./UtilList2.js';import{DataConverterSpell}from'./DataConverterSpell.js';import{SharedConsts}from'../shared/SharedConsts.js';import{ImportListCreature}from'./ImportListCreature.js';import{UtilApplications}from'./UtilApplications.js';class ImportListSpell extends ImportList{constructor(_0x24d0ca){const _0x26c673=_0xda3b;_0x24d0ca=_0x24d0ca||{},super({'title':'Import\x20Spells'},_0x24d0ca,{'props':[_0x26c673(0x1b3)],'titleSearch':'spells','sidebarTab':_0x26c673(0x158),'gameProp':_0x26c673(0x158),'defaultFolderPath':[_0x26c673(0x1c2)],'folderType':_0x26c673(0x15a),'fnListSort':PageFilterSpells[_0x26c673(0x1cb)],'pageFilter':new PageFilterSpells(),'page':UrlUtil['PG_SPELLS'],'isPreviewable':!![],'isModdable':!![],'isDedupable':!![]});}async[_0x244fa1(0x16e)](){const _0x3eda98=_0x244fa1,_0x2790ef=await Vetools[_0x3eda98(0x162)]();return[new ImportList[(_0x3eda98(0x1cd))](Config[_0x3eda98(0x169)]('ui',_0x3eda98(0x1bd))?'SRD':_0x3eda98(0x1d8),async()=>(await Vetools[_0x3eda98(0x168)]())[_0x3eda98(0x1b3)],{'cacheKey':_0x3eda98(0x1a1),'filterTypes':[ImportList[_0x3eda98(0x1a0)]],'isDefault':!![]}),new ImportList[(_0x3eda98(0x1bb))](_0x3eda98(0x1ce),'',{'filterTypes':[ImportList[_0x3eda98(0x1b2)]]}),new ImportList['DataSourceFile'](_0x3eda98(0x1bc),{'filterTypes':[ImportList['SOURCE_TYP_CUSTOM']]}),...Object[_0x3eda98(0x1bf)](_0x2790ef)[_0x3eda98(0x1be)](([_0x14d2ad,_0x936f5f])=>new ImportList[(_0x3eda98(0x1bb))](Parser[_0x3eda98(0x192)](_0x14d2ad),Vetools[_0x3eda98(0x1b9)](_0x936f5f),{'source':_0x14d2ad,'filterTypes':SourceUtil['isNonstandardSource'](_0x14d2ad)?[ImportList[_0x3eda98(0x19c)]]:[ImportList[_0x3eda98(0x1b1)]]})),...(await Vetools['pGetHomebrewSources'](_0x3eda98(0x1b3)))['map'](({name:_0x4c7e52,url:_0x5bb2c2})=>new ImportList[(_0x3eda98(0x1bb))](_0x4c7e52,_0x5bb2c2,{'filterTypes':[ImportList[_0x3eda98(0x17c)]]}))];}[_0x244fa1(0x1b5)](){const _0x295a08=_0x244fa1;return{...super[_0x295a08(0x1b5)](),'level':{'label':_0x295a08(0x1ba),'getter':_0x1a5a74=>''+Parser['spLevelToFull'](_0x1a5a74['level'])+(_0x1a5a74[_0x295a08(0x186)]?'\x20level':'')},'spellPoints':{'label':_0x295a08(0x1da),'getter':_0x41898f=>{const _0x2d4abe=_0x295a08,_0x4ab73b=(()=>{switch(_0x41898f['level']){case 0x1:return 0x2;case 0x2:return 0x3;case 0x3:return 0x5;case 0x4:return 0x6;case 0x5:return 0x7;case 0x6:return 0x8;case 0x7:return 0xa;case 0x8:return 0xb;case 0x9:return 0xd;case 0x0:default:return 0x0;}})();return _0x4ab73b+_0x2d4abe(0x1db);}}};}[_0x244fa1(0x1a7)](){const _0x52a369=_0x244fa1;return{'isPreviewable':this[_0x52a369(0x167)],'titleButtonRun':this[_0x52a369(0x1ae)],'titleSearch':this['_titleSearch'],'buttonsAdditional':[{'name':_0x52a369(0x187),'text':_0x52a369(0x1b4)}],'cols':[{'name':_0x52a369(0x191),'width':'3-2','field':_0x52a369(0x1a6)},{'name':_0x52a369(0x1ba),'width':0x1,'field':_0x52a369(0x186),'rowClassName':_0x52a369(0x170)},{'name':_0x52a369(0x184),'width':0x2,'field':_0x52a369(0x1dc),'rowClassName':'text-center'},{'name':_0x52a369(0x194),'width':0x1,'field':_0x52a369(0x17d),'titleProp':_0x52a369(0x1af),'displayProp':'schoolShort','classNameProp':'schoolClassName','rowClassName':_0x52a369(0x170)},{'name':'C.','width':_0x52a369(0x197),'field':_0x52a369(0x18f),'rowClassName':'text-center','title':_0x52a369(0x172)},{'name':_0x52a369(0x1c1),'width':'2-5','field':_0x52a369(0x1a9),'rowClassName':_0x52a369(0x16c)},{'name':_0x52a369(0x19f),'width':0x1,'field':_0x52a369(0x1d1),'titleProp':_0x52a369(0x1d5),'displayProp':_0x52a369(0x17f),'classNameProp':'sourceClassName','rowClassName':'text-center'}],'rows':this[_0x52a369(0x188)][_0x52a369(0x1be)]((_0x10278d,_0x5a8cb1)=>{const _0x100a0d=_0x52a369;return this[_0x100a0d(0x176)][_0x100a0d(0x1c9)]['mutateForFilters'](_0x10278d),_0x10278d[_0x100a0d(0x18d)]=PageFilterSpells[_0x100a0d(0x171)](_0x10278d[_0x100a0d(0x1dc)][0x0]),_0x10278d[_0x100a0d(0x1c7)]=Parser[_0x100a0d(0x1a4)](_0x10278d[_0x100a0d(0x17d)],_0x10278d['subschools']),{'name':_0x10278d['name'],'level':this[_0x100a0d(0x1c9)][_0x100a0d(0x19b)](_0x10278d),'time':_0x10278d[_0x100a0d(0x18d)],'range':Parser['spRangeToFull'](_0x10278d['range']),'source':_0x10278d[_0x100a0d(0x1d1)],'sourceShort':Parser[_0x100a0d(0x16d)](_0x10278d['source']),'sourceLong':Parser[_0x100a0d(0x192)](_0x10278d[_0x100a0d(0x1d1)]),'sourceClassName':Parser[_0x100a0d(0x1b0)](_0x10278d[_0x100a0d(0x1d1)]),'school':_0x10278d[_0x100a0d(0x17d)],'schoolShort':Parser[_0x100a0d(0x193)](_0x10278d['school'],_0x10278d[_0x100a0d(0x1d4)]),'schoolLong':_0x10278d[_0x100a0d(0x1c7)],'schoolClassName':_0x100a0d(0x1c8)+_0x10278d['school'],'concentration':_0x10278d['_isConc']?'×':'','ix':_0x5a8cb1};})};}[_0x244fa1(0x1c6)](){const _0xb40177=_0x244fa1;this[_0xb40177(0x196)][_0xb40177(0x185)](this[_0xb40177(0x188)],{'fnGetName':_0x212da0=>_0x212da0['name'],'fnGetValues':_0x17620f=>({'source':_0x17620f[_0xb40177(0x1d1)],'level':_0x17620f['level'],'time':_0x17620f[_0xb40177(0x18d)],'normalisedTime':_0x17620f[_0xb40177(0x189)],'normalisedRange':_0x17620f['_normalisedRange'],'school':_0x17620f[_0xb40177(0x1c7)],'concentration':_0x17620f[_0xb40177(0x19d)],'hash':UrlUtil[_0xb40177(0x19e)][this[_0xb40177(0x181)]](_0x17620f)}),'fnGetData':UtilList2[_0xb40177(0x1cf)],'fnBindListeners':_0x12f240=>UtilList2[_0xb40177(0x198)](this[_0xb40177(0x196)],_0x12f240)});}[_0x244fa1(0x19a)](_0x208dad){const _0x4bb045=_0x244fa1;if(!this[_0x4bb045(0x1c3)])return _0x208dad;return new Promise(_0x12efc6=>{const _0x3dc20e=_0x4bb045,_0x31a561=new ImportListSpell[(_0x3dc20e(0x1d2))](_0x208dad,_0x12efc6,{'titleSearch':this[_0x3dc20e(0x15e)]});_0x31a561[_0x3dc20e(0x1aa)](!![]);});}async[_0x244fa1(0x175)](_0x15d814,_0x170ec1){const _0x3c8026=_0x244fa1;_0x170ec1=_0x170ec1||{},console[_0x3c8026(0x179)](...LGT,_0x3c8026(0x15b)+_0x15d814['name']+_0x3c8026(0x1ca)+Parser[_0x3c8026(0x16d)](_0x15d814[_0x3c8026(0x1d1)])+'\x22)');if(_0x170ec1[_0x3c8026(0x174)])return this[_0x3c8026(0x166)](_0x15d814,_0x170ec1);else{if(this[_0x3c8026(0x180)])return this['_pImportEntry_pImportToActor'](_0x15d814,_0x170ec1);else return this[_0x3c8026(0x166)](_0x15d814,_0x170ec1);}}async[_0x244fa1(0x195)](_0x3ab502,_0x16f01a){const _0x565ebd=_0x244fa1,_0x4ec736=await this['_actor']['createEmbeddedEntity'](_0x565ebd(0x164),await DataConverterSpell[_0x565ebd(0x1d7)](_0x3ab502,UtilActors[_0x565ebd(0x15d)](this[_0x565ebd(0x180)])),{});if(this[_0x565ebd(0x180)]['isToken'])this[_0x565ebd(0x180)][_0x565ebd(0x157)][_0x565ebd(0x1aa)]();return{'imported':{'name':_0x3ab502['name'],'actor':this[_0x565ebd(0x180)],'embeddedEntity':_0x4ec736},'status':UtilApplications[_0x565ebd(0x1d9)]};}[_0x244fa1(0x177)](_0x43700e,_0x16e4e1){const _0x182d22=_0x244fa1;return DataConverterSpell[_0x182d22(0x1d7)](_0x43700e,{...UtilActors['getSpellItemItemOpts'](),..._0x16e4e1});}static['getListDisplayLevel'](_0x2081d0){const _0x3a8a5c=_0x244fa1;return''+Parser[_0x3a8a5c(0x18a)](_0x2081d0[_0x3a8a5c(0x186)])+(_0x2081d0[_0x3a8a5c(0x1ac)]&&_0x2081d0['meta'][_0x3a8a5c(0x17a)]?_0x3a8a5c(0x15c):'')+(_0x2081d0[_0x3a8a5c(0x1ac)]&&_0x2081d0[_0x3a8a5c(0x1ac)][_0x3a8a5c(0x183)]?_0x3a8a5c(0x199):'');}}ImportListSpell['DetailPreparation']=class extends Application{constructor(_0x49f5c5,_0x28c9f7,_0x4a623e){const _0x579bb2=_0x244fa1;super({'title':_0x579bb2(0x1ad),'template':SharedConsts[_0x579bb2(0x1b7)]+_0x579bb2(0x1cc),'width':0x3c0,'height':Util['getMaxWindowHeight'](),'resizable':!![]}),this[_0x579bb2(0x18b)]=_0x49f5c5,this['_resolve']=_0x28c9f7,this[_0x579bb2(0x15e)]=_0x4a623e[_0x579bb2(0x18e)],this[_0x579bb2(0x196)]=null,this[_0x579bb2(0x16a)]=null;}['getData'](){const _0x2d13f8=_0x244fa1;return{'titleSearch':this[_0x2d13f8(0x15e)],'rows':this[_0x2d13f8(0x18b)][_0x2d13f8(0x1be)]((_0x1166f1,_0x37c7c2)=>({'name':_0x1166f1[_0x2d13f8(0x1a6)],'level':ImportListSpell[_0x2d13f8(0x19b)](_0x1166f1),'source':_0x1166f1[_0x2d13f8(0x1d1)],'sourceShort':Parser[_0x2d13f8(0x16d)](_0x1166f1[_0x2d13f8(0x1d1)]),'sourceLong':Parser[_0x2d13f8(0x192)](_0x1166f1[_0x2d13f8(0x1d1)]),'sourceClassName':Parser[_0x2d13f8(0x1b0)](_0x1166f1[_0x2d13f8(0x1d1)]),'ix':_0x37c7c2}))};}['activateListeners'](_0x1fb1ee){const _0x3048a2=_0x244fa1;super[_0x3048a2(0x1b8)](_0x1fb1ee),this[_0x3048a2(0x196)]=new List({'$iptSearch':_0x1fb1ee[_0x3048a2(0x1a2)](_0x3048a2(0x1c4)),'$wrpList':_0x1fb1ee[_0x3048a2(0x1a2)](_0x3048a2(0x16b)),'valueNames':[_0x3048a2(0x1a6),'source',_0x3048a2(0x186),'ix']}),SortUtil[_0x3048a2(0x178)](_0x1fb1ee['find'](_0x3048a2(0x1d3)),this[_0x3048a2(0x196)]),this[_0x3048a2(0x196)][_0x3048a2(0x185)](this[_0x3048a2(0x18b)],{'fnGetName':_0x35f368=>_0x35f368[_0x3048a2(0x1a6)],'fnGetValues':_0x2ac299=>({'source':_0x2ac299[_0x3048a2(0x1d1)],'level':_0x2ac299[_0x3048a2(0x186)]})}),this['_list']['init'](),this['_$btnReset']=_0x1fb1ee[_0x3048a2(0x1a2)](_0x3048a2(0x1d0))[_0x3048a2(0x1c5)](()=>{const _0x2cbc74=_0x3048a2;_0x1fb1ee[_0x2cbc74(0x1a2)](_0x2cbc74(0x1c4))[_0x2cbc74(0x17e)]('');if(this[_0x2cbc74(0x196)])this[_0x2cbc74(0x196)][_0x2cbc74(0x16f)]();}),_0x1fb1ee[_0x3048a2(0x1a2)](_0x3048a2(0x1d6))[_0x3048a2(0x1c5)](async()=>{const _0x2258ad=_0x3048a2,_0x27c7e7=this[_0x2258ad(0x196)][_0x2258ad(0x158)][_0x2258ad(0x1be)](_0x27942d=>{const _0x1e6eae=_0x2258ad,_0x2ffbf7=$(_0x27942d[_0x1e6eae(0x160)]),_0x3fee27=_0x2ffbf7[_0x1e6eae(0x1a2)](_0x1e6eae(0x1ab))['val'](),_0x10c072=_0x2ffbf7[_0x1e6eae(0x1a2)](_0x1e6eae(0x18c))[_0x1e6eae(0x17e)](),_0x5d8d24=_0x3fee27&&_0x3fee27!=='-1',_0xbbeec4=_0x10c072&&_0x10c072!=='-1';if(!_0x5d8d24&&!_0xbbeec4)return this['_dataList'][_0x27942d['ix']];const _0x48477d=MiscUtil[_0x1e6eae(0x159)](this[_0x1e6eae(0x18b)][_0x27942d['ix']]);_0x48477d['foundryData']={};if(_0x5d8d24)_0x48477d[_0x1e6eae(0x1a8)][_0x1e6eae(0x163)]=!!Number(_0x3fee27);if(_0xbbeec4)_0x48477d[_0x1e6eae(0x1a8)][_0x1e6eae(0x15f)]=_0x10c072;return _0x48477d;});this[_0x2258ad(0x1a3)](_0x27c7e7),this[_0x2258ad(0x161)]();});if(this['_$btnReset'])this['_$btnReset'][_0x3048a2(0x1c5)]();}async[_0x244fa1(0x161)](){const _0x3f30c1=_0x244fa1;return this[_0x3f30c1(0x1a3)](null),super[_0x3f30c1(0x161)]();}};export{ImportListSpell};