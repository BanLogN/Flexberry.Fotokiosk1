﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Fotokiosk1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Запись время.
    /// </summary>
    // *** Start programmer edit section *** (ЗаписьВремя CustomAttributes)

    // *** End programmer edit section *** (ЗаписьВремя CustomAttributes)
    [AutoAltered()]
    [Caption("Запись время")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаписьВремяE", new string[] {
            "Время as \'Время\'",
            "Статус as \'Статус\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Сотрудники.ФИО"})]
    [MasterViewDefineAttribute("ЗаписьВремяE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ЗаписьВремяL", new string[] {
            "Время as \'Время\'",
            "Статус as \'Статус\'",
            "Сотрудники.ФИО as \'ФИО\'"})]
    public class ЗаписьВремя : ICSSoft.STORMNET.DataObject
    {
        
        private string fВремя;
        
        private IIS.Fotokiosk1.Статусы fСтатус;
        
        private IIS.Fotokiosk1.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (ЗаписьВремя CustomMembers)

        // *** End programmer edit section *** (ЗаписьВремя CustomMembers)

        
        /// <summary>
        /// Время.
        /// </summary>
        // *** Start programmer edit section *** (ЗаписьВремя.Время CustomAttributes)

        // *** End programmer edit section *** (ЗаписьВремя.Время CustomAttributes)
        [StrLen(255)]
        public virtual string Время
        {
            get
            {
                // *** Start programmer edit section *** (ЗаписьВремя.Время Get start)

                // *** End programmer edit section *** (ЗаписьВремя.Время Get start)
                string result = this.fВремя;
                // *** Start programmer edit section *** (ЗаписьВремя.Время Get end)

                // *** End programmer edit section *** (ЗаписьВремя.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаписьВремя.Время Set start)

                // *** End programmer edit section *** (ЗаписьВремя.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (ЗаписьВремя.Время Set end)

                // *** End programmer edit section *** (ЗаписьВремя.Время Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (ЗаписьВремя.Статус CustomAttributes)

        // *** End programmer edit section *** (ЗаписьВремя.Статус CustomAttributes)
        public virtual IIS.Fotokiosk1.Статусы Статус
        {
            get
            {
                // *** Start programmer edit section *** (ЗаписьВремя.Статус Get start)

                // *** End programmer edit section *** (ЗаписьВремя.Статус Get start)
                IIS.Fotokiosk1.Статусы result = this.fСтатус;
                // *** Start programmer edit section *** (ЗаписьВремя.Статус Get end)

                // *** End programmer edit section *** (ЗаписьВремя.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаписьВремя.Статус Set start)

                // *** End programmer edit section *** (ЗаписьВремя.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (ЗаписьВремя.Статус Set end)

                // *** End programmer edit section *** (ЗаписьВремя.Статус Set end)
            }
        }
        
        /// <summary>
        /// Запись время.
        /// </summary>
        // *** Start programmer edit section *** (ЗаписьВремя.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ЗаписьВремя.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Fotokiosk1.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ЗаписьВремя.Сотрудники Get start)

                // *** End programmer edit section *** (ЗаписьВремя.Сотрудники Get start)
                IIS.Fotokiosk1.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ЗаписьВремя.Сотрудники Get end)

                // *** End programmer edit section *** (ЗаписьВремя.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаписьВремя.Сотрудники Set start)

                // *** End programmer edit section *** (ЗаписьВремя.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ЗаписьВремя.Сотрудники Set end)

                // *** End programmer edit section *** (ЗаписьВремя.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаписьВремяE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьВремяE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьВремяE", typeof(IIS.Fotokiosk1.ЗаписьВремя));
                }
            }
            
            /// <summary>
            /// "ЗаписьВремяL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьВремяL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьВремяL", typeof(IIS.Fotokiosk1.ЗаписьВремя));
                }
            }
        }
    }
}
