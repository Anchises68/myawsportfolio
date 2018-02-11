import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:822374759106:deployMirelesCloudTopic')

    try:
        s3 = boto3.resource('s3')
        portfolio_bucket = s3.Bucket('mirelescloud.com')
        build_bucket = s3.Bucket('portfoliobuild.mirelescloud.com')
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print "Great Success"
        topic.publish(Subject="MirelesCloud Portfolio", Message="Great Success")
    except:
        topic.publish(Subject="Error - MirelesCloud Portfolio", Message="Failure")
        raise
    

    # TODO implement
    return 'Hello from Lambda'
