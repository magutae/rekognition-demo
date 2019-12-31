angular.module('config', [])
  .constant('config',
  {
    prod: {
      region: 'ap-northeast-2',
      upload_bucket_name: 'demo-rekognition-s3upload-yoeevgg5fvb5',
      identity_pool_id: 'ap-northeast-2:b93a9161-8cb0-474f-967a-18c10e37be6a',
      face_collection: 'rekognition-demo-go',
      ddb_table: 'rekognition-demo-go'

    }
  }
  )
  ;

