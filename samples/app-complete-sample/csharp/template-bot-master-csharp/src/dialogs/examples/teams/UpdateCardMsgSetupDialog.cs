﻿
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Schema;
using Microsoft.Teams.TemplateBotCSharp.Properties;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Microsoft.Teams.TemplateBotCSharp.Dialogs
{
    /// <summary>
    /// This is setup card dialog class. Main purpose of this class is to setup the card message and then user can update the card using below update dialog file
    /// microsoft-teams-sample-complete-csharp\template-bot-master-csharp\src\dialogs\examples\teams\UpdateCardMsgDialog.cs
    /// </summary>
    public class UpdateCardMsgSetupDialog : ComponentDialog
    {
        public int updateCounter = 0;

        public UpdateCardMsgSetupDialog() : base(nameof(UpdateCardMsgSetupDialog))
        {
            InitialDialogId = nameof(WaterfallDialog);
            AddDialog(new WaterfallDialog(nameof(WaterfallDialog), new WaterfallStep[]
            {
                BeginFormflowAsync,
            }));
        }

        private async Task<DialogTurnResult> BeginFormflowAsync(
WaterfallStepContext stepContext,
CancellationToken cancellationToken = default(CancellationToken))
        {
            if (stepContext == null)
            {
                throw new ArgumentNullException(nameof(stepContext));
            }

            var message = SetupMessage(stepContext);
            await stepContext.Context.SendActivityAsync(message);

            //Set the Last Dialog in Conversation Data
            stepContext.State.SetValue(Strings.LastDialogKey, Strings.LastDialogSetupUpdateCard);

            return await stepContext.EndDialogAsync(null, cancellationToken);
        }

        #region Create Message to Setup Card
        private IMessageActivity SetupMessage(WaterfallStepContext context)
        {
            var message = context.Context.Activity;
            message.Attachments = new List<Attachment>
            {
            new HeroCard
            {
                Title = Strings.SetUpCardTitle,
                Subtitle = Strings.SetupCardSubTitle,
                Images = new List<CardImage> { new CardImage("https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg") },
                Buttons = new List<CardAction>
                {
                    new CardAction(ActionTypes.MessageBack, Strings.UpdateCardButtonCaption, value: "{\"updateKey\": \"" + ++updateCounter + "\"}", text: DialogMatches.UpdateCard)
                }
            }.ToAttachment()
       };
            return message;
        }
        #endregion
    }
}